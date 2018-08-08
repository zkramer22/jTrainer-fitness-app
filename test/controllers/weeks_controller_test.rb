require 'test_helper'

class WeeksControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get weeks_new_url
    assert_response :success
  end

  test "should get create" do
    get weeks_create_url
    assert_response :success
  end

  test "should get edit" do
    get weeks_edit_url
    assert_response :success
  end

  test "should get update" do
    get weeks_update_url
    assert_response :success
  end

  test "should get destroy" do
    get weeks_destroy_url
    assert_response :success
  end

end
