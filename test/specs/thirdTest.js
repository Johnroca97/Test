describe('Fill in the form', async()=>
{

    const titleURL = "DEMOQA"
    const name = "Name"

    const firstName = "John23$"
    const lastName = "Foe1%"
    const email = "psierr@gmail.com"
    const gender = "Male"
    const mobile = "3114450809"
    const daybBirthday = "27"
    const monthbBirthday = "June"
    const yearbBirthday = "2000"
    const subject = "Maths"
    const hobbie = "Reading"
    const currentAdress = "Street 23 Av # 27"


    it('Happy Path with validations', async()=>
    {

        await browser.url("https://demoqa.com/automation-practice-form")
        await browser.maximizeWindow()

        //validate title URL aditional
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining(titleURL)

        //input firstname
        await $("#firstName").setValue(firstName)

        //input lastname
        await $("//input[@placeholder='Last Name']").setValue(lastName)

        //validate text box name aditional
        await expect($("#userName-label")).toHaveText(name)

        //input email
        await $("input[class='mr-sm-2 form-control']").setValue(email)

        //select gender
        if (gender == "Male")
        {
            await $("//label[contains(text(),'Male')]").click()
        } 
        else if (gender == "Female")
        {
            await $("//label[contains(text(),'Female')]").click()
        }
        else await $("//label[contains(text(),'Other')]").click()

        //input mobile
        await $("#userNumber").setValue(mobile)

        //Validate content URL path aditional
        await expect(browser).toHaveUrlContaining("form") 
        
        //select date of birth
        await $("#dateOfBirthInput").click()

        const calendarInput = await $("#dateOfBirthInput")
        const selectYear = await $(".react-datepicker__year-select")
        const selectMonth = await $(".react-datepicker__month-select")
        

        async function selectDate (day, month, year) {
            await selectYear.selectByVisibleText(year) 
            await selectMonth.selectByVisibleText(month)
            await $('.react-datepicker__day--' + day.padStart(3, '0')).click()
        }

        selectDate (daybBirthday, monthbBirthday, yearbBirthday)

        await browser.pause(2000)
        
        //select subjects
        const dropdown = await $('#subjectsInput')
        await dropdown.setValue("ma")
        await dropdown.waitForDisplayed()
        const option = await $('//div[@id="subjectsWrapper"]//div[contains(text(), "Maths")]')
        await option.click()

        await browser.pause(2000)

        //select hobbies
        const iframe = await browser.$("div[id='hobbiesWrapper'] div[class='col-md-9 col-sm-12']")
        await iframe.waitForExist()
        const checkbox = await browser.$("label[for='hobbies-checkbox-2']")
        await browser.execute("arguments[0].click();", checkbox)
        
        //input current Adress
        await $("#currentAddress").setValue(currentAdress)

        //select State
        async () => {
            const hideAdsButton = await $('#close-fixedban');
            const state = "NCR" 
            const city = "Delhi"
          
            if (await hideAdsButton.isDisplayed()) {
              await hideAdsButton.click()
            }
          
            await $("#state").scrollIntoView()
            await $("state").click()
          
            await $(state).click()
            await $("#city").click()
          
            const stateCityWrapper = await $(byId("stateCity-wrapper"))
            await stateCityWrapper.$(city).click()

            await browser.pause(3000)
          
          }


        //click on input
        $("#submit").waitForExist()
        $("#submit").waitForDisplayed()
        const button = await browser.$("//button[@id='submit']")
        await browser.execute("arguments[0].click();", button)

        //validate form submitted
        let confirmation = await $("#example-modal-sizes-title-lg")
        await expect(confirmation).toHaveText("Thanks for submitting the form")

        //validate fields
        //name
        const conc = firstName + " " + lastName
        const names = await $(`//td[normalize-space()='${conc}']`)
        const text = await names.getText()
        await expect(text).toEqual(conc)

        //Email
        const emailIn = await $(`//td[normalize-space()='${email}']`)
        const textEmail = await emailIn.getText()
        await expect(textEmail).toEqual(email)

        //Gender
        const genderIn = await $(`//td[normalize-space()='${gender}']`)
        const textGender = await genderIn.getText()
        await expect(textGender).toEqual(gender)

        //Mobile
        const mobileIn = await $(`//td[normalize-space()='${mobile}']`)
        const textMobile = await mobileIn.getText()
        await expect(textMobile).toEqual(mobile)

        //Date of birth
        const concBirthday = daybBirthday + " " + monthbBirthday + "," + yearbBirthday
        const birthdayIn = await $(`//td[normalize-space()='${concBirthday}']`)
        const textBirthday = await birthdayIn.getText()
        await expect(textBirthday).toEqual(concBirthday)

        //Subjects
        const subjectIn = await $(`//td[normalize-space()='${subject}']`)
        const textSubject = await subjectIn.getText()
        await expect(textSubject).toEqual(subject)

        // Hobbies
        const hobbieIn = await $(`//td[normalize-space()='${hobbie}']`)
        const textHobbie = await hobbieIn.getText()
        await console.log(textHobbie)
        await expect(textHobbie).toEqual(hobbie)

        //Addres
        const addressIn = await $(`//td[normalize-space()='${currentAdress}']`)
        const textAddress = await addressIn.getText()
        await expect(textAddress).toEqual(currentAdress)

        await browser.pause(3000)
        
    })



})