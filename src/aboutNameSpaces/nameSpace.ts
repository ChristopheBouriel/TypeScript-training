namespace space1 {
    export const a = "foo"

    export function exportNamespace() {
        console.log('Export namespace')
    }
}

/** Il faut bien exporter chaque membre auquel on veut pouvoir avoir
 *  accès ensuite
 */

space1.exportNamespace();