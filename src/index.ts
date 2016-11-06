/**
 * Created by Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-11-02
 */

import 'angular';
import 'angular1-async-filter';
import Controller from './Controller';

angular
	.module('app', ['asyncFilter'])
	.controller('AppCtrl', Controller);

