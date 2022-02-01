var space1;
(function (space1) {
    space1.a = "foo";
    function exportNamespace() {
        console.log('Eport namespace');
    }
    space1.exportNamespace = exportNamespace;
})(space1 || (space1 = {}));
/** Il faut bien exporter chaque membre auquel on veut pouvoir avoir
 *  accès ensuite
 */
space1.exportNamespace();
