Feature('Going to court');

Scenario('Going to court event', I => {
  I.loginAsSolicitor();
  I.createCase();
  I.goingToCourtSelectNoForAll();
}).retry({ retries: 3, minTimeout: 30000 });
