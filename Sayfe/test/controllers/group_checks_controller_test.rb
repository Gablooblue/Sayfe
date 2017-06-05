require 'test_helper'

class GroupChecksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @group_check = group_checks(:one)
  end

  test "should get index" do
    get group_checks_url
    assert_response :success
  end

  test "should get new" do
    get new_group_check_url
    assert_response :success
  end

  test "should create group_check" do
    assert_difference('GroupCheck.count') do
      post group_checks_url, params: { group_check: { group_id: @group_check.group_id, receiver_id: @group_check.receiver_id } }
    end

    assert_redirected_to group_check_url(GroupCheck.last)
  end

  test "should show group_check" do
    get group_check_url(@group_check)
    assert_response :success
  end

  test "should get edit" do
    get edit_group_check_url(@group_check)
    assert_response :success
  end

  test "should update group_check" do
    patch group_check_url(@group_check), params: { group_check: { group_id: @group_check.group_id, receiver_id: @group_check.receiver_id } }
    assert_redirected_to group_check_url(@group_check)
  end

  test "should destroy group_check" do
    assert_difference('GroupCheck.count', -1) do
      delete group_check_url(@group_check)
    end

    assert_redirected_to group_checks_url
  end
end
