const PageComponent = ({ count, renderArticleFunc }) => {
  const onPageButtonHandle = (e) => {
    const id = e.target.id;
    renderArticleFunc(id);
  };
  return (
    <button id={count} onClick={onPageButtonHandle}>
      {count}
    </button>
  );
};
export default PageComponent;
