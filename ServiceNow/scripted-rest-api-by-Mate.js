;(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
  // implement resource here
  // implement resource here
  // x_724839_lms_courses
  // x_724839_lms_chapters
  // x_724839_lms_lessons

  var courseNum = request.pathParams.courseNumber

  var courses = new GlideRecord("x_724839_lms_courses")
  var chapters = new GlideRecord("x_724839_lms_chapters")

  courses.addQuery("sys_id", courseNum)
  courses.query()
  courses.next()

  var coursObj = {
    title: courses.getValue("name"),
  }

  chapters.addQuery("reference_courses", courseNum)
  chapters.query()

  var chapterArr = []

  while (chapters.next()) {
    var lessons = new GlideRecord("x_724839_lms_lessons")

    var chapterNum = chapters.getValue("sys_id")
    var chapter = {
      // ITT VAN AZ OBJECT
      title: chapters.getValue("title"),
      //lessons: []
    }

    lessons.addQuery("chapters", chapterNum)
    lessons.query()

    var lesson = []

    while (lessons.next()) {
      lesson.push(lessons.getValue("title"))
    }
    //chapter['lessons'] = lesson;
    chapter.lessons = lesson
    chapterArr.push(chapter)
  }
  coursObj.chapters = chapterArr
  response.setBody(coursObj)
})(request, response)
