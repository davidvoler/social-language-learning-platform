angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en', {"About":"About","Lesson: {{lesson.title}}":"Lesson: {{lesson.title}}","Social Language Learning Platform":"Social Language Learning Platform"});
    gettextCatalog.setStrings('he', {"About":"אודות","Lesson: {{lesson.title}}":"שיעורים: {{lesson.title}}","Social Language Learning Platform":"פלטפורמה חברתית ללמוד שפות"});
    gettextCatalog.setStrings('it', {"About":"su","Lesson: {{lesson.title}}":"Lezione: {{lesson.title}}","Social Language Learning Platform":"Piataforma sociale per imparare le lingue"});
/* jshint +W100 */
}]);