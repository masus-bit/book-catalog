import React, { useState } from "react";
import { connect, MapStateToProps } from "react-redux";
import { Redirect, Route } from "react-router";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { RootState } from "../../store/types";
import { checkAccessToken } from "../../utils";
interface StateProps {
  isAuth: boolean;
}

interface OwnProps {
  exact?: boolean;
  secured?: boolean;
  path: string;
  layout?: any;
  component: any;
  publicOnly?: boolean;
}
type Props = OwnProps & StateProps;

const PagePresenter: React.FC<Props> = ({
  secured = false,
  exact = false,
  path,
  layout: Layout = MainLayout,
  component: Component,
  isAuth,
  publicOnly = false,
}) => {
  if (secured && !isAuth) {
    return <Redirect to={"/auth"} />;
  }
  if (publicOnly && isAuth) {
    return <Redirect to={"/"} />;
  }
  return (
    <Route exact={exact} path={path}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  isAuth: checkAccessToken(app.accessToken),
});

export const Page = connect(mapStateToProps)(PagePresenter);
