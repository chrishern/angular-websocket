'use strict';

angular.module('githubApp')
    .controller('WebSocketCtrl', function ($websocket, $scope) {
      
      console.log("In controller");      

      // Open a WebSocket connection
      var dataStream = $websocket('ws://localhost:8082/eventUpdates');

      console.log("Connected");

      dataStream.send(JSON.stringify({ event: 'subscribeAll' }));

      $scope.receivedMessages = [];

      dataStream.onMessage(function(message) {
        console.log("Message received: " + message.data);
        $scope.receivedMessages.push(message.data);
      });

    });
