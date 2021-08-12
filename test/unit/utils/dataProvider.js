const load = require;

const loadFile = (file) => {

  console.log(`definitions/divorce/json/${file}.json`)

  return Object.assign(load(`../../../definitions/family-private/json/${file}.json`), []);
};

module.exports = {
  data: {
    AuthorisationCaseEvent: Object.assign(load('definitions/family-private/json/AuthorisationCaseEvent'), []), //loadFile('AuthorisationCaseEvent'),
    AuthorisationCaseField: loadFile('AuthorisationCaseField'),
    AuthorisationCaseState: loadFile('AuthorisationCaseState'),
    AuthorisationCaseType: loadFile('AuthorisationCaseType'),
    CaseEvent: loadFile('CaseEvent'),
    CaseEventToFields: loadFile('CaseEventToFields'),
    CaseField: loadFile('CaseField'),
    CaseRoles: loadFile('CaseRoles'),
    CaseType: loadFile('CaseType'),
    CaseTypeTab: loadFile('CaseTypeTab'),
    // ComplexTypes: loadFile('ComplexTypes'),
    FixedLists: loadFile('FixedLists'),
    Jurisdiction: loadFile('Jurisdiction'),
    SearchInputFields: loadFile('SearchInputFields'),
    SearchResultFields: loadFile('SearchResultFields'),
    State: loadFile('State'),
    UserProfile: loadFile('UserProfile'),
    WorkBasketInputFields: loadFile('WorkBasketInputFields'),
    WorkBasketResultFields: loadFile('WorkBasketResultFields')
  }
};
