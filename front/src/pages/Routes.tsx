import React from "react";
import { Redirect, Switch } from "react-router";
import { Page } from "../components/Page/Page";
import { AuthLayout } from "../layouts/AuthLayout/AuthLayout";
import { AboutPage } from "./AboutPage/AboutPage";
import { AuthorPage } from "./AuthorPage/AuthorPage";
import { AuthPage } from "./AuthPage/AuthPage";
import { CatalogPage } from "./CatalogPage/CatalogPage";
import { Error404 } from "./Error404/Error404";
import { GenrePage } from "./GenrePage/GenrePage";
import { GenrePageEdit } from "./GenrePageEdit/GenrePageEdit";
import { GenreSinglePage } from "./GenreSinglePage/GenreSinglePage";
import { LanguagePage } from "./LanguagePage/LanguagePage";
import { LanguagePageEdit } from "./LanguagePageEdit/LanguagePageEdit";
import { LanguageSinglePage} from "./LanguageSinglePage/LanguageSinglePage";
import { PublisherPage } from "./PublisherPage/PublisherPage";
import { RefPage } from "./RefPage/RefPage";
import { RegisterPage } from "./RegisterPage/RegisterPage";

interface Props {}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={"/"} to={"/catalog"} />
      <Page path={"/auth"} publicOnly={true} layout={AuthLayout} component={AuthPage} />
      <Page path={"/registration"} exact layout={AuthLayout} component={RegisterPage}/>
      <Page secured path={"/catalog"} component={CatalogPage} />
      <Page exact secured path={"/ref"} component={RefPage} />
      <Page secured path={"/ref/authors"} component={AuthorPage} />
      <Page exact secured path={"/ref/genres"} component={GenrePage} />
      <Page exact secured path={'/ref/genres/create'} component={GenrePageEdit} />
      <Page exact secured path={'/ref/genres/:id'} component={GenreSinglePage} />
      <Page exact secured path={'/ref/genres/:id/edit'} component={GenrePageEdit} />
      <Page exact secured path={'/ref/languages'} component={LanguagePage} />
      <Page exact secured path={'/ref/languages/create'} component={LanguagePageEdit} />
      <Page exact secured path={'/ref/languages/:id'} component={LanguageSinglePage} />
      <Page exact secured path={'/ref/languages/:id/edit'} component={LanguagePageEdit} />
      <Page secured path={"/ref/publishers"} component={PublisherPage} />
      <Page secured path={"/about"} component={AboutPage} />
      <Page path={"*"} layout={AuthLayout} component={Error404} />
    </Switch>
  );
};
