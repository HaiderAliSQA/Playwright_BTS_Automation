export class Studentlocator {
  // Student Navigation Locators
  static readonly studentsTab = "//span[normalize-space()='Students']";
  static readonly addStudentButton = "//button[@title='Create Student']";
  static readonly saveStudentButton =
    "//button[normalize-space()='Save and Close']";

  // Student Form Locators
  static readonly studentNameInput = "//input[@name='studentName']";
  static readonly studentEmailInput = "//input[@name='email']";
  static readonly studentPhoneInput = "//input[@name='phone']";
  static readonly studentAddressInput = "//input[@name='address']";
  static readonly addServicebutton =
    "//button[normalize-space()='Add Service']";

  // Student Name Fields
  static readonly StudentfirstName = "//input[@name='firstName']";
  static readonly StudentMidlleName = "//input[@name='middleName']";
  static readonly StudentLastName = "//input[@name='lastName']";

  static readonly selectLocation =
    "//ng-select[@name='location']//input[@type='text']";
  static readonly profilePictureUrl = "//input[@name='profilePictureUrl']";
  static readonly selectProvider =
    "//ng-select[@name='providers']//input[@type='text']";

  // Student Grid Locators
  static readonly studentGrid = "//div[@class='student-grid']";
  static readonly selectStudentGrid = "//a[contains(text(),'Students')]";

  // static readonly searchStudentInput = "//input[@placeholder='Search student']";
  // static readonly editStudentButton = "button[title='Edit Student']";

  // Student Details Locators
  static readonly studentIdInput = "//input[@name='studentId']";
  static readonly studentGradeInput = "//select[@name='grade']";
  static readonly studentSchoolInput = "//input[@name='school']";

  // Service Type Locators
  static readonly SelectServiceTypes =
    "//select[@class='browser-default custom-select ng-untouched ng-pristine ng-valid']";
  static readonly PONumerStudentGrid =
    "//div[@class='card-body pt-0']//div[@class='col-md-4']//input[contains(@placeholder,'')]";
}