/// <reference path="exportNamespace.ts" />

/** Il ne s'agit pas là d'import/export en JS mais en TS
 *  On met donc une annotation destinée uniquement au transpileur
 *  (pas à la machine exécutant le JS) pour lui indiquer qu'il doit d'abord
 *  aller chercher le fichier quand il voit le nom du namespace
 */

space2.exportNamespace2();

/** En ligne de commande, au moment de demander la transpilation,
 *  il faut ajouter le flag suivant : --outFile
 *  Cela permet de n'avoir plus qu'un fichier à la fin. On indique ensuite
 *  ce fichier de destination, puis le fichier source
 *  Ex : (npm run) tsc --outFile src/aboutNameSpaces/nameSpace2.js src/aboutNameSpaces/nameSpace2.ts
 */