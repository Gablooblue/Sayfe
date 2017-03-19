require 'test_helper'

class DisastersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @disaster = disasters(:one)
  end

  test "should get index" do
    get disasters_url, as: :json
    assert_response :success
  end

  test "should create disaster" do
    assert_difference('Disaster.count') do
      post disasters_url, params: { disaster: { desc: @disaster.desc, title: @disaster.title } }, as: :json
    end

    assert_response 201
  end

  test "should show disaster" do
    get disaster_url(@disaster), as: :json
    assert_response :success
  end

  test "should update disaster" do
    patch disaster_url(@disaster), params: { disaster: { desc: @disaster.desc, title: @disaster.title } }, as: :json
    assert_response 200
  end

  test "should destroy disaster" do
    assert_difference('Disaster.count', -1) do
      delete disaster_url(@disaster), as: :json
    end

    assert_response 204
  end
end
