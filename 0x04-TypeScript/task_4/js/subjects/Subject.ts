import { Subjects } from './Teacher';

export namespace Subjects {
    export interface Subject {
        private _teacher: Teacher;
    }