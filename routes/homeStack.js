/*
 * @Date         : 2022-09-19 12:41:20
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-19 17:03:51
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \routes\homeStack.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
	Home: {
		screen: Home,
	},
	ReviewDetails: {
		screen: ReviewDetails,
	},
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
