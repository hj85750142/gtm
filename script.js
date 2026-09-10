const testButton = document.querySelector("#gtm-test-button");
const testStatus = document.querySelector("#test-status");

window.dataLayer = window.dataLayer || [];

testButton.addEventListener("click", () => {
  window.dataLayer.push({
    event: "gtm_test_button_click",
    button_id: testButton.id,
    button_text: testButton.textContent.trim(),
  });

  testStatus.textContent = `已点击（${new Date().toLocaleTimeString()}）`;
});
