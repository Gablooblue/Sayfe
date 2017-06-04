require 'test_helper'

class SafetyChecksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @safety_check = safety_checks(:one)
  end

  test "should get index" do
    get safety_checks_url
    assert_response :success
  end

  test "should get new" do
    get new_safety_check_url
    assert_response :success
  end

  test "should create safety_check" do
    assert_difference('SafetyCheck.count') do
      post safety_checks_url, params: { safety_check: {  } }
    end

    assert_redirected_to safety_check_url(SafetyCheck.last)
  end

  test "should show safety_check" do
    get safety_check_url(@safety_check)
    assert_response :success
  end

  test "should get edit" do
    get edit_safety_check_url(@safety_check)
    assert_response :success
  end

  test "should update safety_check" do
    patch safety_check_url(@safety_check), params: { safety_check: {  } }
    assert_redirected_to safety_check_url(@safety_check)
  end

  test "should destroy safety_check" do
    assert_difference('SafetyCheck.count', -1) do
      delete safety_check_url(@safety_check)
    end

    assert_redirected_to safety_checks_url
  end
end
