import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';

// stylesheet for example (to keep reusing same class name, and not have it appear inline)
import stylesheet from '../styles/examples/02.scss';

export default () => (
  <Layout currentPageNum={2} exampleCSS={stylesheet}>
    <Main currentPageNum={2}>
      <h1>Your First Grid</h1>

      <h4>Create a grid</h4>
      <p>
        The first thing we want to do is to create a grid container. We can do this by declaring{' '}
        <code>display: grid</code> on the container element. In this example we are using a div with
        the class of <code>container</code>.
      </p>

      <h4>Define rows and columns</h4>
      <p>
        There are many ways to do define rows and columns, but for our first grid, we will be using
        the <code>grid-template-columns</code> and <code>grid-template-rows</code> properties. These
        properties allow us to define the size of the row and column tracks for our grid. If we want
        to create three fixed-height rows of 150px and three fixed-width columns of 150px, then we
        simply add:
      </p>

      <CodeBlock>
        {`
grid-template-columns: 150px 150px 150px;
grid-template-rows: 150px 150px;
        `}
      </CodeBlock>

      <p>If you wanted to add a fourth column that is 70px wide, you could instead write:</p>

      <CodeBlock>
        {`
grid-template-columns: 150px 150px 70px;
        `}
      </CodeBlock>

      <p>...and so on.</p>

      <h4>Add a gutter</h4>

      <p>Adding a gutter to your grid is amazingly easy with CSS Grid Layout. Simply add:</p>

      <CodeBlock>
        {`
grid-gap: 1rem;
        `}
      </CodeBlock>

      <p>
        With that simple line, you now have an equal-sized gutter between all rows and columns. If
        you wish to define the gutter size for columns and rows individually, you can use the
        grid-column-gap and grid-row-gap properties instead.
      </p>

      <p>Now let's put that all together. Here is our HTML:</p>

      <CodeBlock>
        {`
<div class="container">
  <div class="item item1"></div>
  <div class="item item2"></div>
  <div class="item item3"></div>
  <div class="item item4"></div>
  <div class="item item5"></div>
  <div class="item item5"></div>
</div>
        `}
      </CodeBlock>

      <p>With just a few lines of CSS, we can create a simple grid:</p>

      <CodeBlock>
        {`
.container {
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-template-rows: 150px 150px;
  grid-gap: 1rem;
}
        `}
      </CodeBlock>
      <p>And the result:</p>

      <div className="container">
        <div className="item item1" />
        <div className="item item2" />
        <div className="item item3" />
        <div className="item item4" />
        <div className="item item5" />
        <div className="item item5" />
      </div>
    </Main>
  </Layout>
);