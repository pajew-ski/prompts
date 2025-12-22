
from playwright.sync_api import sync_playwright
import os

def run():
    # Start a static file server to serve the dist folder
    # We can't easily start a separate background process from this script reliably in this environment
    # so we assume we can open the file directly via file:// protocol

    cwd = os.getcwd()
    dist_path = os.path.join(cwd, 'dist', 'index.html')
    url = f'file://{dist_path}'

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Load the page
        print(f'Loading {url}...')
        page.goto(url)

        # 2. Check if manifest is linked
        manifest_link = page.locator('link[rel="manifest"]')
        if manifest_link.count() > 0:
            print('✅ Manifest link found.')
        else:
            print('❌ Manifest link NOT found.')

        # 3. Check Theme Logic (Default should be light or follow system)
        # We can simulate media emulation
        print('Testing Dark Mode emulation...')
        page.emulate_media(color_scheme='dark')
        # Wait a bit for listener to fire
        page.wait_for_timeout(1000)

        # Check data-theme attribute
        theme = page.evaluate('document.documentElement.getAttribute("data-theme")')
        print(f'Theme after dark emulation: {theme}')

        if theme == 'dark':
            print('✅ Theme automatically switched to dark.')
        else:
            print(f'❌ Theme failed to switch. Got: {theme}')

        # 4. Take a screenshot
        page.screenshot(path='verification/screenshot_dark.png')
        print('Screenshot saved to verification/screenshot_dark.png')

        # 5. Test Toggle
        print('Testing Toggle Button...')
        toggle_btn = page.locator('#theme-toggle')
        toggle_btn.click()
        page.wait_for_timeout(500)

        theme_after_toggle = page.evaluate('document.documentElement.getAttribute("data-theme")')
        print(f'Theme after toggle: {theme_after_toggle}')

        # Should be light now (toggled from dark)
        if theme_after_toggle == 'light':
             print('✅ Toggle worked (switched to light).')
        else:
             print(f'❌ Toggle failed. Got: {theme_after_toggle}')

        browser.close()

if __name__ == '__main__':
    run()
