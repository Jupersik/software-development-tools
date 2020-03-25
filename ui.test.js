describe('Testing the frontend', () => {
    beforeAll(async () => {
        await page.goto('file://C:/Users/Юлия/Desktop/исрпо/software-development-tools/index.html');
    });

    //Проверка теге <title>
    test("assert that <title> is correct", async () => {
        const title = await page.title();
        expect(title).toBe("Т3.2. Тестирование графического интерфейса");
    });

    //Проверка равно ли 1 поле 2 
    test('test inputs textBoxA = textBoxB', async () => {
        //выбираем поле 1(нажимаем)
        await page.click('#textBoxA');
        //добавление в поле 1 текст
        await page.type('#textBoxA', 'test');
        //Проверка поля 1, содержит ли некий элемент тот текст, который в нём должен быть
        var Input1Text = await page.$eval('#textBoxA', el => el.value);
        expect(Input1Text).toEqual('test');
        //Проверка поля 2 содержит ли некий элемент тот текст, который в нём должен быть
        var Input2Text = await page.$eval('#textBoxB', el => el.value);
        expect(Input2Text).toEqual('test');
    });

    //тест кнопок на странице
    test('test button', async () => {
        //выбираем поле 1(нажимаем)
        await page.click('#textBoxA');
        //добавление в поле 1 текст
        await page.type('#textBoxA', 'test');
        //нажимаем на кнопку "Очистить форму"
        await page.click('#clear');
        //Проверка поля 1
        var Input1Text = await page.$eval('#textBoxA', el => el.value);
        expect(Input1Text).toEqual('');
        //Проверка поля 2 поля
        var Input2Text = await page.$eval('#textBoxB', el => el.value);
        expect(Input2Text).toEqual('');

        //выбираем поле 1(нажимаем)
        await page.click('#textBoxA');
        //добавление в поле 1 текст
        await page.type('#textBoxA', 'test');
        //нажимаем на кнопку "отправить запрос"
        await page.click('#send_out');
        //получаю текущий URL
        let checkUrl = await page.evaluate(() => location.href);
        expect(checkUrl).toEqual('file:///C:/Users/%D0%AE%D0%BB%D0%B8%D1%8F/Desktop/%D0%B8%D1%81%D1%80%D0%BF%D0%BE/software-development-tools/index.html?pole1=test&pole2=test');
    });
}); 