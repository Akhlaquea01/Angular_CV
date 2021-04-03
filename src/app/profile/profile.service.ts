import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '75%'
    },
    {
      'id': '2',
      'skill': 'JAVASCRIPT',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'C',
      'progress': '30%'
    },
    {
      'id': '4',
      'skill': 'PYTHON',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'TYPESCRIPT',
      'progress': '55%'
    },
    {
      'id': '6',
      'skill': 'CSS',
      'progress': '60%'
    },
    {
      'id': '7',
      'skill': 'HTML',
      'progress': '90%'
    },
    {
      'id': '8',
      'skill': 'Node',
      'progress': '50%'
    },
    {
      'id': '9',
      'skill': 'MongoDb',
      'progress': '50%'
    }
  ];

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2016 - 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Technology',
      'institution': 'Vishveshwarya Group of Institutions, Greater Noida'
    },
    {
      'id': '2',
      'from_to_year': '2015 - 2016',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'K.R. Bose Smarak College, Muzaffarpur'
    },
    {
      'id': '3',
      'from_to_year': '2013 - 2014',
      'education': 'High School',
      'stream': 'Science',
      'institution': 'Sacred Heart School, Muzaffarpur'
    }
  ];

  exprienceData: any = [
    {
      'id': '1',
      'from_to_month_year': 'FEBRUARY 2021 - Current',
      'organization': 'Zycus',
      'designation': 'Angular Developer',
      'details': `Good company to work and life balance. Learnt frontend technologies
      like HTML,CSS,JS,TS, Angular . Very proud to work in Zycus. Other than work we can do many other
      physical activities.it'll be very nice to get mind relaxed and balance our work- life.`
    },
    {
      'id': '2',
      'from_to_month_year': 'NOVEMBER 2020 - JANUARY 2021',
      'organization': 'Edureka',
      'designation': 'Student',
      'details': 'Designed  <strong>Pizza App<\/strong> using Node and MongoDb.'
    },
    {
      'id': '3',
      'from_to_month_year': 'JANUARY 2021 - JANUARY 2021',
      'organization': 'Youtube',
      'designation': 'Student',
      'details': 'Developed  Website of My <strong>Profile<\/strong>.'
    }
  ];


  skills(): Observable<any> {
    return this.skillsData;
  }

  education(): Observable<any> {
    return this.educationData;
  }

  exprience(): Observable<any> {
    return this.exprienceData;
  }
}
