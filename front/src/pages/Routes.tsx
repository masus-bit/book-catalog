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
import { LanguagePage } from "./LanguagePage/LanguagePage";
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
      <Page secured path={"/ref/genres"} component={GenrePage} />
      <Page exact secured path={'/ref/languages'} component={LanguagePage} />
      {/* <Page exact secured path={'/ref/languages/create'} component={''} /> */}
      <Page exact secured path={'/ref/languages/:id'} component={LanguageSinglePage} />
      <Page exact secured path={'/ref/languages/:id/edit'} component={''} />
      <Page secured path={"/ref/publishers"} component={PublisherPage} />
      <Page secured path={"/about"} component={AboutPage} />
      <Page path={"*"} layout={AuthLayout} component={Error404} />
    </Switch>
  );
};
