describe('Fill in the form', async()=>
{

    const firstName = "Pepe"
    const lastName = "Sierra"
    const email = "psierr@gmail.com"
    const Gender = "Male"
    const mobile = "3114450809"
    const birthday = "27 Jun 2000"
    const currentAdress = "Calle 25 8 34"


    beforeEach("open web", async()=>
    {
        await browser.url("https://demoqa.com/automation-practice-form")
        await browser.maximizeWindow()

    })

    it('Without first name', async()=>
    {

        //search for Xpath
        await $("//input[@placeholder='Last Name']").setValue(lastName)
        //search for cssSelector
        await $("input[class='mr-sm-2 form-control']").setValue(email)

        if (Gender == "Male")
        {
            await $("//label[contains(text(),'Male')]").click()
        } 
        else if (Gender == "Female")
        {
            await $("//label[contains(text(),'Female')]").click()
        }
        else await $("//label[contains(text(),'Other')]").click()

        await $("#userNumber").setValue(mobile)

        const iframe = await browser.$("div[id='hobbiesWrapper'] div[class='col-md-9 col-sm-12']");
        await iframe.waitForExist();
        const checkbox = await browser.$("label[for='hobbies-checkbox-2']");
        await browser.execute("arguments[0].click();", checkbox);

        await $("#currentAddress").setValue(currentAdress)

        $('#submit').waitForExist();
        $('#submit').waitForDisplayed();
        const button = await browser.$("//button[@id='submit']");
        await browser.execute("arguments[0].click();", button);

        let errorFirstName = await $("//input[@id='firstName']")
        await expect(errorFirstName).toBeExisting()


        await browser.pause(2000)  
        
    })

    it('Without last name', async()=>
    {

        //search for ID
        await $("#firstName").setValue(firstName)
        //search for cssSelector
        await $("input[class='mr-sm-2 form-control']").setValue(email)

        if (Gender == "Male")
        {
            await $("//label[contains(text(),'Male')]").click()
        } 
        else if (Gender == "Female")
        {
            await $("//label[contains(text(),'Female')]").click()
        }
        else await $("//label[contains(text(),'Other')]").click()

        await $("#userNumber").setValue(mobile)

        const iframe = await browser.$("div[id='hobbiesWrapper'] div[class='col-md-9 col-sm-12']");
        await iframe.waitForExist();
        const checkbox = await browser.$("label[for='hobbies-checkbox-2']");
        await browser.execute("arguments[0].click();", checkbox);

        await $("#currentAddress").setValue(currentAdress)

        $('#submit').waitForExist();
        $('#submit').waitForDisplayed();
        const button = await browser.$("//button[@id='submit']");
        await browser.execute("arguments[0].click();", button);

        let errorLastName = await $("//input[@id='lastName']")
        await expect(errorLastName).toBeExisting()


        await browser.pause(2000)  
        
    })

    it('Without gender', async()=>
    {

        //search for ID
        await $("#firstName").setValue(firstName)
        //search for Xpath
        await $("//input[@placeholder='Last Name']").setValue(lastName)
        //search for cssSelector
        await $("input[class='mr-sm-2 form-control']").setValue(email)

        await $("#userNumber").setValue(mobile)

        const iframe = await browser.$("div[id='hobbiesWrapper'] div[class='col-md-9 col-sm-12']");
        await iframe.waitForExist();
        const checkbox = await browser.$("label[for='hobbies-checkbox-2']");
        await browser.execute("arguments[0].click();", checkbox);

        await $("#currentAddress").setValue(currentAdress)


        $('#submit').waitForExist();
        $('#submit').waitForDisplayed();
        const button = await browser.$("//button[@id='submit']");
        await browser.execute("arguments[0].click();", button);

        let gender = await $("//div[normalize-space()='Gender']")
        await expect(gender).toBeExisting()


        await browser.pause(2000)  
        
    })

    it('Without mobile', async()=>
    {

        //search for ID
        await $("#firstName").setValue(firstName)
        //search for Xpath
        await $("//input[@placeholder='Last Name']").setValue(lastName)
        //search for cssSelector
        await $("input[class='mr-sm-2 form-control']").setValue(email)

        if (Gender == "Male")
        {
            await $("//label[contains(text(),'Male')]").click()
        } 
        else if (Gender == "Female")
        {
            await $("//label[contains(text(),'Female')]").click()
        }
        else await $("//label[contains(text(),'Other')]").click()

        const iframe = await browser.$("div[id='hobbiesWrapper'] div[class='col-md-9 col-sm-12']");
        await iframe.waitForExist();
        const checkbox = await browser.$("label[for='hobbies-checkbox-2']");
        await browser.execute("arguments[0].click();", checkbox);

        await $("#currentAddress").setValue(currentAdress)

        $('#submit').waitForExist();
        $('#submit').waitForDisplayed();
        const button = await browser.$("//button[@id='submit']");
        await browser.execute("arguments[0].click();", button);

        let mobile = await $("#userNumber")
        await expect(mobile).toBeExisting()


        await browser.pause(2000)  
        
    })



})