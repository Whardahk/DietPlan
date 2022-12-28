describe("Open Application", () => {
  it("Open until Home menu", async () => {
    driver.setImplicitTimeout(6000);

    const welcomePage =
      'new UiSelector().text("Welcome...").className("android.widget.TextView")';
    await expect(await $(`android=${welcomePage}`)).toHaveTextContaining(
      "Welcome"
    );
    const inputNname = await $("id=com.fghilmany.dietmealapp:id/et_name");
    const inputWeight = await $("id=com.fghilmany.dietmealapp:id/et_weight");
    const inputHeight = await $("id=com.fghilmany.dietmealapp:id/et_height");
    const chooseGender = await $("id=com.fghilmany.dietmealapp:id/rb_female");
    const nextButton = await $("id=com.fghilmany.dietmealapp:id/bt_next");
    const activity = await $("id=com.fghilmany.dietmealapp:id/rb_rest");
    const finishButton = await $("id=com.fghilmany.dietmealapp:id/bt_finish");
    const homeMenu = await $("id=com.fghilmany.dietmealapp:id/tv_header_meal");

    await inputNname.setValue("whardah");
    await inputWeight.setValue("56");
    await inputHeight.setValue("157");
    await chooseGender.click();
    await nextButton.click();
    await activity.click();
    await finishButton.click();
    await expect(homeMenu).toHaveAttribute("text", "Meals");

    driver.setImplicitTimeout(10000);
  });
});
