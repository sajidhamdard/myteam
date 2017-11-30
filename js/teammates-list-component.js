'use strict';

// Register `teamList` component, along with its associated controller and template
angular.
  module('lmsApp').
  component('teamList', {
    template:
         '<ul>'+
                '<li ng-repeat="teammate in teammates">'+
                     '<div class="row">'+
                        '<div class="col-lg-6 col-md-offset-3">'+
                            '<div class="team text-center">'+
                                '<div class="cover" style="background:url("#"); background-size:cover;">'+
                                '<div class="overlay text-center">'+
                                '<h3 class="white">Contact</h3>'+
                               '<h5 class="light light-white">Mobile: 999999999</h5>'+
                            '</div>'+
                        '</div>'+
                        '<img src="#" alt="Team Image" class="avatar">'+
                        '<div class="title">'+
                            '<h4 class="muted regular">{{teammate.name}}</h4>'+
                            '<h5 class="muted regular">Advocate & Founder, Law Chambers</h5>'+
                            '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</li>'+
            '</ul>',
    controller: function MyTeamController() {
      this.teammates = [
        {
            image: 'sajid.jpg',
            imagesmall: 'teamsajid.jpg',
            name: 'Sajid Ali Khan'
        },
        {
            image: 'teamother.png',
            imagesmall: 'other.png',
            name: 'Sharukh Khan'
        },
        {
            image: 'profile1.png',
            imagesmall: 'profile1.png',
            name: 'Mr. LMS '
        },
        {
            image: 'profile.gif',
            imagesmall: 'profile.gif',
            name: 'LMS Logo'
        }
        ];
    }
  });
