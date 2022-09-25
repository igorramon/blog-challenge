import { Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreatePost } from "../pages/CreatePost";
import { Post } from "../pages/Post";
import { UserPosts } from "../pages/UserPosts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/criar-post" exact component={CreatePost} />
      <Route path="/post/:id/:idUser" exact component={Post} />
      <Route path="/user/:userId/post" exact component={UserPosts} />
    </Switch>
  );
};

export default Routes;
