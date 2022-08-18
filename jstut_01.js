class Student_class
{
    static count = 0;

    constructor(name, age, phnno, bdm)
    {
        this.name = name;
        this.age = age;
        this.phnno = phnno;
        this.bdm = bdm;
    }

    static countStudent()
    {
        return (Student_class.count++);
    }

    check_eligi()
    {
        if(this.bdm > 40)
        {
            console.log("You are eligible to the college");
        }

        else{
            console.log("You are not eligible for college");
        }

    }

    eligible_placement()
    {
        if(this.bdm >= 60)
        {
            console.log("You are eligible for placements");
        }

        else{
            console.log("You are not eligible for placements");
        }
    }
}

const Ashutosh = new Student_class('Ashutosh', 23, 1234, 75);
const Arun = new Student_class('Arun', 25, 1234, 78);
const Abhimanyu = new Student_class('Abhimanyu', 21, 1234, 35);
const Ashirwaad = new Student_class('Ashirwaad', 26, 1234, 45);
const Aakash = new Student_class('Aakash', 24, 1234, 38);

console.log(Aakash.check_eligi());
console.log(Ashutosh.check_eligi());
console.log(Ashirwaad.check_eligi());

console.log(Aakash.eligible_placement());
console.log(Ashirwaad.eligible_placement());
console.log(Abhimanyu.eligible_placement());
console.log(Ashutosh.eligible_placement());
// let multiplybythree = multiply.bind(this,3);
// multiplybythree(5);
