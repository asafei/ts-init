/** @format */

module.exports = {
    // 最大行长
    printWidth: 120,
    // 在语句的末尾打印分号
    semi: false,
    // 使用单引号而不是双引号
    singleQuote: true,
    // 在多行逗号分隔的句法结构中尽可能打印尾随逗号
    // "es5"- 在 ES5 中有效的尾随逗号（对象、数组等）。TypeScript 中的类型参数中没有尾随逗号。
    // "none"- 没有尾随逗号。
    // "all"- 尽可能使用尾随逗号（包括函数参数和调用）。要运行，以这种方式格式化的 JavaScript 代码需要一个支持 ES2017（Node.js 8+ 或现代浏览器）或下级编译的引擎。这还可以在 TypeScript 中的类型参数中启用尾随逗号（自 2018 年 1 月发布的 TypeScript 2.7 起支持）。
    trailingComma: 'all',
    // 在对象文字中的括号之间打印空格
    // bracketSpacing: true,
    jsxBracketSameLine: true,
    // // 将>多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素）
    bracketSameLine: true,
    // 在唯一的箭头函数参数周围包含括号。
    // always"- 始终包括括号。例子：(x) => x
    // "avoid"- 尽可能省略括号。例子：x => x
    arrowParens: 'avoid',
    // 插入编译指示
    insertPragma: true,
    // 指定每个缩进级别的空格数
    tabWidth: 4,
    // 使用制表符而不是空格缩进行
    useTabs: false,
    // 行结束
    // lf"– 仅换行 ( \n)，常见于 Linux 和 macOS 以及 git repos 内部
    // "crlf"- 回车 + 换行字符 ( \r\n)，常见于 Windows
    // "cr"- 仅回车字符 ( \r)，很少使用
    // "auto"- 保持现有的行尾（一个文件中的混合值通过查看第一行之后使用的内容进行标准化
    endOfLine: 'lf',
}
