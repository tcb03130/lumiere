$(function () {
  const slideList = $(".slide-list");
  const slideWidth = $(".slide").width();
  const slideItemCount = slideList.find("li").length;
  let currentIndex = 0;

  // 이전 슬라이드 버튼 클릭 이벤트
  $(".slide-prev").click(function () {
    currentIndex = (currentIndex - 1 + slideItemCount) % slideItemCount;
    updateSlidePosition();
    updateDot();
  });

  // 다음 슬라이드 버튼 클릭 이벤트
  $(".slide-next").click(function () {
    currentIndex = (currentIndex + 1) % slideItemCount;
    updateSlidePosition();
    updateDot();
  });

  // 슬라이드 위치 업데이트 함수
  function updateSlidePosition() {
    const newPosition = -currentIndex * (slideWidth + 20); // 이미지 사이의 간격 20px 고려
    slideList.css("transform", `translateX(${newPosition}px)`);
  }

  // 도트 업데이트 함수
  function updateDot() {
    $(".dot").removeClass("active");
    $(".dot").eq(currentIndex).addClass("active");
  }

  // 자동 슬라이드 기능
  setInterval(function () {
    currentIndex = (currentIndex + 1) % slideItemCount;
    updateSlidePosition();
    updateDot();
  }, 3000); // 3초마다 자동으로 슬라이드 이동

  // 초기 슬라이드 위치 설정
  updateSlidePosition();
  updateDot();

  // 검색

  $(document).ready(function () {
    // 검색 아이콘 클릭 이벤트
    $("#searchIcon").click(function () {
      $("#searchDropdown").toggle(); // 검색창을 토글합니다.
    });

    // 검색 버튼 클릭 이벤트
    $("#searchButton").click(function () {
      performSearch();
    });

    // 엔터 키로 검색할 수 있도록 설정
    $("#searchInput").keypress(function (event) {
      if (event.which === 13) {
        // Enter 키를 눌렀을 때
        performSearch();
      }
    });

    // 검색을 수행하는 함수
    function performSearch() {
      var searchTerm = $("#searchInput").val().trim();
      if (searchTerm !== "") {
        console.log("검색어:", searchTerm);
        // 여기서 실제 검색 기능을 구현할 수 있습니다.
        // 예를 들어, 검색 결과를 표시하거나 다른 작업을 수행할 수 있습니다.
      } else {
        alert("검색어를 입력해주세요.");
      }
      // 검색창을 숨깁니다.
      $("#searchDropdown").hide();
    }
  });
});
