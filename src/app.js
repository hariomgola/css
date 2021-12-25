/**
 * Startup Application
 */
const start = () => {
  let body = document.body;
  const file = ["init", "content"];
  for (let i = 0; i < file.length; i++) {
    let _script = document.createElement("script");
    _script.src = `./src/${file[i]}.js`;
    body.appendChild(_script);
  }
};
start();
