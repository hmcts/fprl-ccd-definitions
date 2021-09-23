Feature('Type of Application');

Scenario('Create a case and Submit the Type of Application workflow', async I => {
  await I.loginAsSolicitor();
  await I.createCase();
  await I.runTypeOfApplicationEvent();
}).retry({ retries: 3, minTimeout: 30000 });
