import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';


dotenv.config({
  path:`./env/.env.${process.env.ENV}`,
});

export default defineConfig({
 //testMatch: '/tests/Verify_user_able_to_Upload_Images_for_patient.test.ts',
  //testMatch: '/tests/Login.test.ts',
 //testMatch: '/tests/AddNewpatient.spec.ts',
  testDir: 'tests',
  // testIgnore: '*Login.test.ts',
  //testMatch: '*todo-tests/*.spec.ts'
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],['allure-playwright']],
    use: {
    actionTimeout: 60000,
    trace: 'on',
    screenshot: 'only-on-failure',
    headless: true,
    navigationTimeout: 80000,
    video: 'on',
    deviceScaleFactor: 2,
    viewport: { width: 1260, height: 600 } 
  },
  
  

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] , viewport: { width: 1260, height: 600 } },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
