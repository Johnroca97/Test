describe('Without invalid values', async()=>
{

    beforeEach("open web", async()=>
    {
        await browser.url("https://demoqa.com/automation-practice-form")
        await browser.maximizeWindow()

    })
    

    it ('Invalid values in email', async()=>
    {
        const email = "psierr"

        //search for ID
        await $("#firstName").setValue("Robert")
        //search for Xpath
        await $("//input[@placeholder='Last Name']").setValue("Aet")
        //search for cssSelector
        await $("input[class='mr-sm-2 form-control']").setValue(email)

        await $("label[for='gender-radio-1']").click()

        await $("#userNumber").setValue("3224453212")
        
        //select hobbie 
        const iframe = await browser.$("div[id='hobbiesWrapper'] div[class='col-md-9 col-sm-12']");
        await iframe.waitForExist();
        const checkbox = await browser.$("label[for='hobbies-checkbox-2']");
        await browser.execute("arguments[0].click();", checkbox);
        
        await $("#currentAddress").setValue("Street 45 Av")

        $('#submit').waitForExist();
        $('#submit').waitForDisplayed();
        const button = await browser.$("//button[@id='submit']");
        await browser.execute("arguments[0].click();", button);

        let conEmail = await $("input[class='mr-sm-2 form-control']")
        await expect(conEmail).toBeExisting()


        await browser.pause(3000)

    })

    it ('Invalid values in mobile', async()=>
    {
        const mobile = "311223435"

        //search for ID
        await $("#firstName").setValue("Robert")
        //search for Xpath
        await $("//input[@placeholder='Last Name']").setValue("Aet")
        //search for cssSelector
        await $("input[class='mr-sm-2 form-control']").setValue("robertaet@gmail.com")

        await $("label[for='gender-radio-1']").click()

        await $("#userNumber").setValue(mobile)
        //Validate content URL path
        await expect(browser).toHaveUrlContaining("form") 

        const iframe = await browser.$("div[id='hobbiesWrapper'] div[class='col-md-9 col-sm-12']");
        await iframe.waitForExist();
        const checkbox = await browser.$("label[for='hobbies-checkbox-2']");
        await browser.execute("arguments[0].click();", checkbox);
        
        await $("#currentAddress").setValue("Street 45 Av")

        $('#submit').waitForExist();
        $('#submit').waitForDisplayed();
        const button = await browser.$("//button[@id='submit']");
        await browser.execute("arguments[0].click();", button);

        let conMobile = await $("#userNumber")
        await expect(conMobile).toBeExisting()


        await browser.pause(3000)

    })



})