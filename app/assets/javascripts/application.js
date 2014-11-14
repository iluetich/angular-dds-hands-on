// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular.min
//= require_tree .

var app = angular.module("handson-dds", []);

app.controller("MainCtrl", function ($scope, $http) {
  $scope.isLoading = true;

  $http.get("/casas.json").success(function (response) {
    $scope.casas = response.casas;
    $scope.isLoading = false;
  });

  $scope.cargarFuerzas = function(casa) {
    $http.get("/fuerzas.json?casa=" + casa.id).success(function (response) {
      $scope.casaSeleccionada = casa;
      $scope.fuerzas = response.fuerzas;
    })
  }
});
