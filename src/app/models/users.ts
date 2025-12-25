


enum userType{

    Admin = "Admin",

    Member ="Member",

    Guest = "Guest",

}

export class User{

   private UserId!: number;

   private FirstName!: string;

   private LastName!: string;

   private Age!: number;

   private Type!: userType;

   constructor(firstName: string, lastName: string, age: number, userId: number,type: userType){

        this.FirstName = firstName;

        this.LastName = lastName;

        this.Age = age;

        this.UserId = userId;
     
        this.Type = type;
   }

   fullName(): void{

      console.log("the name of the user : " + this.FirstName + "le prenom de l'utilisateur est : " + this.LastName);
   }

   greetUser(): void{

       switch (this.Type){

         case userType.Admin :
  
           console.log("bonjour admin "+ this.fullName());

           break;

        case userType.Guest :

           console.log("bonjour guest "+ this.fullName());

           break;

        case userType.Member :

           console.log("bonjour membre "+ this.fullName());

           break;

        default :

          console.log("bonjour "+ this.fullName());

       }

   }

   public get userId() : number {

      return this.UserId;
   }

   
   public get lastName() : string {

      return  this.LastName;

   }

   
   public get firstName() : string {

      return this.FirstName;

   }

   
   public get type() : userType {

     return  this.Type;

   }

   
   public set firstName(v_firstName : string) {

      this.FirstName = v_firstName;

   }
   
   
   public set lastName(v_lastName : string) {

      this.LastName = v_lastName;

   }
   
   public set userId(v_userId : number) {

      this.UserId = v_userId;

   }
   
   public set value(v_userType : userType) {

    this.Type = v_userType;

   }
   
}


