import React from 'react';
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
} from 'react-instantsearch-dom';
import { Container } from "./article-algolia.style";
import { Wrapper } from "../../components/wrapper";

const HitComponent = ({ hit }) => {
  console.log('hit');
  console.log(hit);
  return <div className="hit">
    <div>
      <div className="hit-picture">
        <img src={`${hit.image}`} />
      </div>
    </div>
    <div className="hit-content">
      <div>
        <Highlight attribute="name" hit={hit} />
        <h2> - {hit?.entry?.title}</h2>
      </div>
      <div className="hit-type">
        <Highlight attribute="hit.entry.type" hit={hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="hit.entry.summary" hit={hit} />
      </div>
    </div>
  </div>
};

const ArticleAlgolia = (props) => {
  return (
    <Wrapper>
      <Container>
        <InstantSearch {...props}>
          <Configure hitsPerPage={12} />
          <header>
            <h1>Search Articles / Videos</h1>
            <SearchBox />
          </header>
          <main>
            <div className="menu">
              <h1>Type</h1>
              <RefinementList attribute="entry.type" />
              <h1>Topics</h1>
              <RefinementList attribute="entry.topics" />
            </div>
            <div className="results">
              <Hits hitComponent={HitComponent} />
            </div>
          </main>
        </InstantSearch>
      </Container>
    </Wrapper>
  );
};

export default ArticleAlgolia;
