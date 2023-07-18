import { ITestObject } from "src/app/model/test";

export const values: ITestObject[] = [
     { createdAt: new Date(), id: 1, isCompleted: false, value: "First_value" },
     {
          createdAt: new Date(),
          id: 2,
          isCompleted: false,
          value: "Second_value",
     },
     { createdAt: new Date(), id: 3, isCompleted: false, value: "3th_value" },
     { createdAt: new Date(), id: 4, isCompleted: false, value: "4th_value" },
     { createdAt: new Date(), id: 5, isCompleted: false, value: "5th_value" },
     { createdAt: new Date(), id: 6, isCompleted: false, value: "6th_value" },
];
