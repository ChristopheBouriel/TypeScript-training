var space2;
(function (space2) {
    space2.a = "foo";
    function exportNamespace2() {
        console.log('Export namespace 2');
    }
    space2.exportNamespace2 = exportNamespace2;
})(space2 || (space2 = {}));
