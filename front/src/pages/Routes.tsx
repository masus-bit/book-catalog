import React from "react";
import { Redirect, Switch } from "react-router";
import { Page } from "../components/Page/Page";
import { AuthLayout } from "../layouts/AuthLayout/AuthLayout";
import { AboutPage } from "./AboutPage/AboutPage";
import { AuthorAllPage } from "./AuthorAllPage/AuthorAllPage";
import { AuthorEditPage } from "./AuthorEditPage/AuthorEditPage";
import { AuthorPage } from "./AuthorPage/AuthorPage";
import { AuthPage } from "./AuthPage/AuthPage";
import { CatalogPage } from "./CatalogPage/CatalogPage";
import { Error404 } from "./Error404/Error404";
import { GenreAllPage } from "./GenreAllPage/GenreAllPage";
import { GenreEditPage } from "./GenrePageEdit/GenreEditPage";
import { GenrePage } from "./GenrePage/GenrePage";
import { LanguageAllPage } from "./LanguageAllPage/LanguageAllPage";
import { LanguageEditPage } from "./LanguageEditPage/LanguageEditPage";
import { LanguagePage} from "./LanguagePage/LanguagePage";
import { PublisherAllPage } from "./PublisherAllPage/PublisherAllPage";
import { RefPage } from "./RefPage/RefPage";
import { RegisterPage } from "./RegisterPage/RegisterPage";
import { PublisherPage } from "./PublisherPage/PublisherPage";
import { PublisherEditPage } from "./PublisherEditPage/PublisherEditPage";

interface Props {}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={"/"} to={"/catalog"} />
      <Page path={"/auth"} publicOnly={true} layout={AuthLayout} component={AuthPage} />
      <Page path={"/registration"} exact layout={AuthLayout} component={RegisterPage}/>
      <Page secured path={"/catalog"} component={CatalogPage} />
      <Page exact secured path={"/ref"} component={RefPage} />
      <Page exact secured path={"/ref/authors"} component={AuthorAllPage} />
      <Page exact secured path={'/ref/authors/create'} component={AuthorEditPage} />
      <Page exact secured path={'/ref/authors/:id'} component={AuthorPage} />
      <Page exact secured path={'/ref/authors/:id/edit'} component={AuthorEditPage} />
      <Page exact secured path={"/ref/genres"} component={GenreAllPage} />
      <Page exact secured path={'/ref/genres/create'} component={GenreEditPage} />
      <Page exact secured path={'/ref/genres/:id'} component={GenrePage} />
      <Page exact secured path={'/ref/genres/:id/edit'} component={GenreEditPage} />
      <Page exact secured path={'/ref/languages'} component={LanguageAllPage} />
      <Page exact secured path={'/ref/languages/create'} component={LanguageEditPage} />
      <Page exact secured path={'/ref/languages/:id'} component={LanguagePage} />
      <Page exact secured path={'/ref/languages/:id/edit'} component={LanguageEditPage} />
      <Page exact secured path={"/ref/publishers"} component={PublisherAllPage} />
      <Page exact secured path={'/ref/publishers/create'} component={PublisherEditPage} />
      <Page exact secured path={'/ref/publishers/:id'} component={PublisherPage} />
      <Page exact secured path={'/ref/publishers/:id/edit'} component={PublisherEditPage} />
      <Page secured path={"/about"} component={AboutPage} />
      <Page path={"*"} layout={AuthLayout} component={Error404} />
    </Switch>
  );
};
