import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';

const rootElement = document.getElementById('root');

// https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<App/>);



// 　メモ
// createRootを使用することで、アプリケーション全体が非同期でレンダリングされるため、いくつかの変更が必要になる場合がありますが、回避策もあります。

// まず、createRootがレンダリングするまでに、ページの初期ロード時にコンテンツが表示されるように、SSR（サーバーサイドレンダリング）を行うことができます。SSRを行うことで、クライアント側のJavaScriptの読み込み完了を待たずに、ページのHTMLとCSSがレンダリングされ、ユーザーがすぐにコンテンツを閲覧できるようになります。

// また、React 18では、createRootを使用している場合でも、非同期でレンダリングされない要素を明示的に指定することができます。createBlockingRootという新しいAPIが追加され、このAPIを使用することで、非同期でレンダリングされない要素を指定することができます。例えば、以下のように使用します。

// javascript
// Copy code
// import { createBlockingRoot } from 'react-dom';

// const root = createBlockingRoot(document.getElementById('root'));

// root.render(<App />);
// このようにすることで、createRootを使用する場合でも、非同期でレンダリングされない要素を指定することができます。ただし、この方法は、createRootを使用することで得られるパフォーマンスの向上効果を失う可能性があるため、注意が必要です。