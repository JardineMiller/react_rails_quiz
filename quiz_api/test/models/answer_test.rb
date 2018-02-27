require 'test_helper'

class AnswerTest < ActiveSupport::TestCase

  test "Answers belongs to a question" do
    assert_equal(answers(:one).question, questions(:one))
  end

  test "Answer has points" do
    assert_equal(answers(:one).points, 15)
  end

  test "Answer has text" do
    assert_equal(answers(:one).text, "Text1")
  end

end
