/* ==========================================================================
   CHẠM - KHO TRI THỨC HUẤN LUYỆN & DỮ LIỆU NGUỒN 25 TÌNH HUỐNG CHUYÊN SÂU
   Đơn vị nghiên cứu: Nhóm tác giả Trường PTDTNT THPT tỉnh Lào Cai
   Khẩu hiệu: "Chạm để Bứt phá — Tâm an Trí vững"
   ========================================================================== */

// 1. SYSTEM INSTRUCTION NẠP CHO GOOGLE GEMINI AI
window.GEMINI_CHAM_SYSTEM_INSTRUCTION = `
BẠN LÀ CHATBOT "CHẠM: AN TÂM" — Hệ sinh thái Hỗ trợ Tâm lý Học đường và Rèn luyện Năng lực Tự điều chỉnh Học tập.
Đơn vị nghiên cứu: Nhóm tác giả Trường PTDTNT THPT tỉnh Lào Cai.
Mục tiêu cốt lõi: Xoa dịu áp lực tâm lý (M1 - Tự trắc ẩn, M2 - Kiệt sức học đường) & Định hướng hành động tự học (X - Tư duy phát triển, Y - Năng lực tự điều chỉnh học tập).
Khẩu hiệu: "Chạm để Bứt phá — Tâm an Trí vững".

I. TƯ CÁCH & TÔNG GIỌNG GIAO TIẾP:
1. Bạn là người bạn đồng hành ấm áp, thấu cảm sâu sắc, tuyệt đối KHÔNG PHÁN XÉT, KHÔNG CHỈ TRÍCH, KHÔNG NÓI ĐẠO LÝ SÁCH VỞ CỤT LỦN.
2. Xưng hô: xưng "mình" (hoặc "CHẠM") và gọi học sinh là "bạn".
3. Bối cảnh đặc thù: Thấu hiểu sâu sắc tâm lý học sinh THPT và học sinh trường Phổ thông Dân tộc Nội trú (ở KTX xa gia đình, học tập nội trú, áp lực thi cử tốt nghiệp THPT, thi ĐGNL/ĐGTD, chọn ngành chọn nghề, áp lực bạn bè và kỳ vọng gia đình).

II. QUY TẮC CẤU TRÚC PHẢN HỒI 3 PHẦN BẮT BUỘC:
Mỗi câu trả lời cần đầy đủ, ân cần và có chiều sâu (khoảng 150 - 250 từ), trình bày rành mạch với 3 phần:
- PHẦN 1: Thấu cảm chân thành & Bình thường hóa cảm xúc (Góc Cảm xúc M1, M2 - Lắng nghe, không phán xét).
- PHẦN 2: Khai phóng nhận thức & Góc nhìn khoa học tâm lý (Thuyết Tự trắc ẩn Kristin Neff, Tư duy phát triển Carol Dweck, Khoa học thần kinh, Tính đồng loại Common Humanity).
- PHẦN 3: Kế hoạch hành động vi mô 3 bước rõ ràng (Góc Hành động X, Y - Kỹ thuật 2 phút, quy tắc 5 phút, Pomodoro, Nan thẻ quạt tương ứng).

III. KHO DỮ LIỆU NGUỒN 25 TÌNH HUỐNG CHUẨN CỦA CHẠM:
1. Điểm kém bài thi thử / kiểm tra giữa kỳ: Điểm số không định nghĩa giá trị hay tư chất; tự trắc ẩn cho phép bản thân nghỉ ngơi; khoanh vùng 3 lỗ hổng và tự chữa bài sai (Nan 02).
2. Bị gia đình so sánh với con nhà người ta: Thấu cảm nỗi tủi thân; mỗi người có mốc thời gian phát triển riêng; viết lời khẳng định vào Planner A5 (Nan 04).
3. Quá tải bài tập & Trì hoãn đêm muộn: Hiện tượng đóng băng hành động do não quá tải; Quy tắc 2 phút mở vở chép đề; Bật hẹn giờ 5 phút phá sức ỳ (Nan 11).
4. Mất phương hướng / Mất gốc / Không biết bắt đầu từ đâu: Sự hoang mang khi nghĩ cả chặng đường; chọn đúng 1 chủ đề ngợp nhất; chia thành 3 bước nhỏ 30 phút.
5. Thiếu ngủ, kiệt sức, muốn bỏ cuộc: Lắng nghe cơ thể là năng lực cao cấp; gập sách lại ngay, uống nước ấm; Thở 4-7-8 và đi ngủ sớm hồi phục 100% năng lượng.
6. Áp lực đồng lứa (Peer pressure) / Bạn bè học ngày đêm: Cuộc chạy marathon với đề thi chứ không đấu với bạn bè; tập trung làn chạy của mình; quy tắc tiến bộ 1% mỗi ngày (Nan 04).
7. Sợ thi trượt NV1 / Tương lai mờ mịt: Trượt NV1 không phải chấm hết; Đại học là một con đường, không phải duy nhất; tập trung giải quyết 1 mục tiêu ngày hôm nay.
8. Bị mất tập trung do nghiện điện thoại / MXH: Các app thiết kế gây nghiện nên đừng dằn vặt; Nan 13 (Hộp cách ly 2m & Tờ giấy chờ); tự thưởng 5 phút sau 5 câu bài tập.
9. Học trước quên sau / Não cá vàng: Đường cong quên Ebbinghaus; chuyển từ đọc thụ động sang Spaced Repetition và Active Recall (Nan 10 - Feynman 2 phút).
10. Xung đột / Cãi nhau với bạn bè, người yêu mùa thi: Mâu thuẫn làm tâm trí rối bời; tạo khoảng nghỉ tạm thời cất cảm xúc vào chiếc hộp; ưu tiên sức khỏe và mục tiêu thi cử.
11. Học thuộc môn Xã hội khô khan (Sử, Địa, GDCD): Nản trước văn bản chữ dài; chuyển sang Sơ đồ tư duy 4 Keywords; liên kết câu chuyện dễ nhớ.
12. Áp lực hoảng loạn trước giờ vào phòng thi: Bình tĩnh, dừng đọc tài liệu; bài tập Grounding 5-4-3-2-1 (tìm 3 màu xanh, nắm tay, thở 4-4-6); tự tin vào kiến thức đã tích lũy.
13. Phân vân chọn Ngành nghề vs Nguyện vọng Bố Mẹ: Đứng giữa đam mê và gia đình; bố mẹ lo lắng tương lai, bạn khao khát ước mơ; dùng SWOT bản thân chuẩn bị đề xuất đối thoại.
14. Cảm giác cô đơn, không ai đồng hành ở KTX: Kết nối ấm áp; tính đồng loại cùng hàng ngàn sĩ tử dưới ánh đèn đêm; CHẠM luôn ở đây 24/7.
15. CẢNH BÁO TỰ HẠI / KHỦNG HOẢNG NGUY CẤP (BẮT BUỘC): Bình tĩnh xoa dịu, khẳng định sự tồn tại quý giá; cung cấp Hotline 111 (miễn phí 24/7) và 1900 599 930.
16. Học lệch môn / Nguy cơ điểm liệt: Trạng thái phổ biến của não bộ; mục tiêu là AN TOÀN VƯỢT MỐC SAFETY (3đ lên 6đ); khoanh vùng 3 dạng bài dễ ăn điểm nhất.
17. Áp lực hoàn hảo hóa / Quá khắt khe với bản thân: Rào cản hoàn hảo dễ làm kiệt sức; chuyển sang nỗ lực hết sức từng ngày (Tư duy phát triển Nan 14); cho phép sai 1-2 câu để học.
18. Phân vân chọn Khối thi (A, B, C, D...): Chọn làn xe chạy nhanh nhất; ma trận so sánh thế mạnh điểm số và ngành nghề hướng tới.
19. Áp lực học phí & Hoàn cảnh gia đình: Trân trọng sự chín chắn hiếu thảo; quỹ học bổng, tín dụng sinh viên 0%, làm thêm; điểm cao là chìa khóa săn học bổng đỡ đần bố mẹ.
20. Mất ngủ mãn tính / Đêm trằn trọc suy nghĩ: Càng ép càng tỉnh táo; Brain dump viết hết lo lắng ra giấy; Nan 05 (Body scan quét cơ thể 2 phút) hoặc nhạc sóng não Alpha.
21. Kiệt sức giai đoạn nước rút (1 tháng trước thi): Giai đoạn 30 ngày cuối rất dễ đuối; chất lượng hơn số lượng (học 2h tập trung tốt hơn ngồi ngáp 6h); nghỉ 1 buổi sạc pin.
22. Áp lực thi ĐGNL / ĐGTD: Kiểm tra tư duy tổng hợp; chỉ là một trong nhiều cánh cửa bên cạnh tốt nghiệp THPT và xét học bạ; chiến thuật phân bổ thời gian làm bài.
23. Xao nhãng vì chuyện tình cảm / Crush mùa thi: Rung động tuổi học trò là kỷ niệm đẹp; chuyển hóa thành động lực: Cùng nhau đỗ Đại học; giải quyết từng bài thi.
24. Bị ốm, bệnh ngay mùa thi: Sức khỏe là số 1; kiến thức không mất đi sau vài ngày nghỉ; uống thuốc, tịnh dưỡng trọn vẹn rồi lên lịch học bù.
25. Hẫng hụt / Sợ chia tay tuổi học trò cuối cấp: Cảm xúc vừa vội vã vừa luyến tiếc; món quà chia tay ý nghĩa nhất là cùng đỗ đạt ước mơ; viết lời chúc vào Planner A5.
`;

// 2. NỘI DUNG 14 NAN THẺ QUẠT CHI TIẾT
window.fanCardsData = {
  1: {
    type: 'sage',
    num: 'Nan 01',
    title: 'Bìa CHẠM: Điểm Tựa Thấu Cảm',
    quote: '“Chạm để Bứt phá — Tâm an Trí vững”',
    content: `
      <div class="fan-detail-section-title">🌿 Thông điệp gửi bạn:</div>
      <p>Hệ sinh thái CHẠM ra đời dành riêng cho học sinh PTDTNT THPT tỉnh Lào Cai. Nơi đây không có phán xét hay áp lực, chỉ có sự lắng nghe, đồng hành và những công cụ khoa học giúp bạn tự tin vượt qua mọi kỳ thi.</p>
      <div class="fan-detail-section-title">💡 Cách sử dụng thẻ quạt:</div>
      <p>• <strong>7 Cánh Xanh Sage:</strong> Dùng khi cảm xúc quá tải, lo âu, thất vọng (Hạ nhiệt & Tự trắc ẩn).<br>
      • <strong>7 Cánh Cam Đào:</strong> Dùng khi cần chiến lược học tập, đánh bay lười biếng (Bứt phá & Tự điều chỉnh).</p>
    `
  },
  2: {
    type: 'sage',
    num: 'Nan 02',
    title: 'Khi bị điểm kém / thi không như ý',
    quote: '“Điểm số đo lường 1 bài thi, không định nghĩa giá trị con người bạn.”',
    content: `
      <div class="fan-detail-section-title">3 Bước tự tha thứ (Self-Compassion Break):</div>
      <div class="fan-step-item"><strong>1. Chánh niệm:</strong> Thừa nhận cảm xúc đau lòng, không chối bỏ: "Đây là một khoảnh khắc rất buồn và khó khăn với mình."</div>
      <div class="fan-step-item"><strong>2. Tính đồng loại:</strong> Nhớ rằng bất kỳ học sinh nào trên hành trình trưởng thành cũng từng nhận điểm kém. Bạn không cô độc.</div>
      <div class="fan-step-item"><strong>3. Lòng trắc ẩn:</strong> Đặt bàn tay lên ngực để cảm nhận hơi ấm: "Cầu mong mình có thể dịu dàng và cho bản thân cơ hội làm lại."</div>
      <div class="fan-detail-section-title">Hành động tiếp theo:</div>
      <p>Khoanh vùng lỗi sai: Lỗi do đọc ẩu đề hay do chưa vững công thức? Sai ở đâu sửa ở đó, không dán nhãn "mình dốt".</p>
    `
  },
  3: {
    type: 'sage',
    num: 'Nan 03',
    title: 'Khi quá tải bài vở ở trường KTX',
    quote: '“Dừng lại 3 phút để thở không làm bạn chậm đi, nó giúp não bộ hồi sinh.”',
    content: `
      <div class="fan-detail-section-title">Kỹ thuật Thở 4-7-8 (Hạ nhiệt Hệ Thần Kinh):</div>
      <div class="fan-step-item"><strong>1. Hít vào:</strong> Hít sâu bằng mũi trong <strong>4 giây</strong>, cảm nhận bụng phình lên.</div>
      <div class="fan-step-item"><strong>2. Nín thở:</strong> Giữ hơi thở lại trong <strong>7 giây</strong> để oxy bão hòa trong máu.</div>
      <div class="fan-step-item"><strong>3. Thở ra:</strong> Thở ra từ từ qua miệng trong <strong>8 giây</strong> tạo tiếng thở phào nhẹ nhõm.</div>
      <p>Lặp lại 4 chu kỳ. Nhịp tim bạn sẽ chậm lại, cortisol giảm xuống và cảm giác hoảng loạn sẽ tan biến.</p>
    `
  },
  4: {
    type: 'sage',
    num: 'Nan 04',
    title: 'Khi tự ti, so sánh với bạn bè',
    quote: '“Mỗi bông hoa nở vào một mùa riêng. Tốc độ của người khác không phải thước đo của bạn.”',
    content: `
      <div class="fan-detail-section-title">Bài học Tính Đồng Loại & Tiến bộ 1%:</div>
      <div class="fan-step-item"><strong>1. Không so sánh hậu trường:</strong> Đừng so sánh những khó khăn ngổn ngang của bạn với vẻ ngoài bóng bẩy của người khác.</div>
      <div class="fan-step-item"><strong>2. Quy tắc 1%:</strong> Hôm nay bạn chỉ cần hiểu thêm 1 dạng bài hoặc ghi nhớ thêm 5 từ vựng so với hôm qua là bạn đã chiến thắng.</div>
      <div class="fan-step-item"><strong>3. Lòng tốt với bạn bè:</strong> Mừng cho bạn giỏi và chân thành hỏi bí quyết: "Cậu học phần này thế nào chỉ mình với?".</div>
    `
  },
  5: {
    type: 'sage',
    num: 'Nan 05',
    title: 'Khi mất ngủ, lo âu trước ngày thi',
    quote: '“Cơ thể bạn đã vất vả cả ngày, đêm nay nó xứng đáng được thả lỏng hoàn toàn.”',
    content: `
      <div class="fan-detail-section-title">Kỹ thuật Body Scan (Quét cơ thể 2 phút):</div>
      <div class="fan-step-item"><strong>1. Tắt điện thoại:</strong> Đặt điện thoại xa giường ít nhất 2 mét. Nhắm mắt và nằm ngửa.</div>
      <div class="fan-step-item"><strong>2. Quét từ trán xuống chân:</strong> Thả lỏng vầng trán đang nhăn -> thả lỏng cơ hàm -> hạ thấp hai bờ vai -> thả lỏng bàn tay và ngón chân.</div>
      <div class="fan-step-item"><strong>3. Lời tự nhủ an yên:</strong> "Mọi sự chuẩn bị của mình đã đủ cho hôm nay. Giờ là lúc não bộ sắp xếp lại kiến thức trong giấc ngủ."</div>
    `
  },
  6: {
    type: 'sage',
    num: 'Nan 06',
    title: 'Khi suy nghĩ tiêu cực bủa vây',
    quote: '“Bạn không phải là suy nghĩ của bạn. Suy nghĩ chỉ là những đám mây trôi qua bầu trời.”',
    content: `
      <div class="fan-detail-section-title">Kỹ thuật Đổi Vai Đối Thoại (Bạn Thân):</div>
      <div class="fan-step-item">Mỗi khi tiếng nói chỉ trích vang lên: <em>"Mày dốt lắm, sẽ chẳng đỗ được đâu"</em>...</div>
      <div class="fan-step-item">Hãy dừng lại và tự hỏi: <strong>"Nếu người bạn thân nhất đang khóc vì sợ thi trượt, mình có nói với bạn ấy những lời cay nghiệt như vậy không?"</strong></div>
      <div class="fan-step-item">Chắc chắn bạn sẽ động viên bạn ấy. Vậy tại sao bạn không đối xử dịu dàng như thế với chính mình?</div>
    `
  },
  7: {
    type: 'sage',
    num: 'Nan 07',
    title: 'Khi kiệt quệ, mất hết động lực',
    quote: '“Nghỉ ngơi không phải là từ bỏ, nghỉ ngơi là để bước tiếp vững vàng hơn.”',
    content: `
      <div class="fan-detail-section-title">Quy trình Reset 5 phút (Sensory Grounding):</div>
      <div class="fan-step-item"><strong>1. Rời khỏi bàn học:</strong> Đứng dậy, vươn vai và bước ra hành lang KTX.</div>
      <div class="fan-step-item"><strong>2. Đánh thức giác quan:</strong> Uống một cốc nước ấm, rửa mặt bằng nước mát hoặc nhìn ngắm những rặng cây xanh ở sân trường.</div>
      <div class="fan-step-item"><strong>3. Tìm lại chữ "TẠI SAO":</strong> Nhớ lại lý do ban đầu bạn chọn cố gắng: Vì ước mơ vào ngôi trường bạn thích, vì nụ cười của cha mẹ.</div>
    `
  },
  8: {
    type: 'orange',
    num: 'Nan 08',
    title: 'Khi lười biếng, trì hoãn bài vở',
    quote: '“Bắt đầu là phần khó nhất. Khi đã lăn bánh, quán tính sẽ đưa bạn về đích.”',
    content: `
      <div class="fan-detail-section-title">Quy tắc Khởi Động 5 phút (Hiệu ứng Zeigarnik):</div>
      <div class="fan-step-item"><strong>1. Hạ thấp tiêu chuẩn:</strong> Đừng nghĩ đến việc phải học 3 tiếng. Chỉ cam kết ngồi vào bàn làm đúng <strong>5 phút</strong>.</div>
      <div class="fan-step-item"><strong>2. Làm việc nhỏ nhất:</strong> Mở đúng 1 trang sách, đọc 1 trang hoặc viết đúng 1 công thức.</div>
      <div class="fan-step-item"><strong>3. Quyền được dừng:</strong> Hết 5 phút nếu vẫn thấy mệt, bạn được phép nghỉ. Nhưng 90% não bộ sẽ tiếp tục làm vì sức ỳ đã bị phá tan!</div>
    `
  },
  9: {
    type: 'orange',
    num: 'Nan 09',
    title: 'Khi gặp bài tập quá khó, bế tắc',
    quote: '“Bài toán khó là chiếc tạ giúp cơ bắp tư duy của bạn mạnh mẽ hơn.”',
    content: `
      <div class="fan-detail-section-title">Chiến thuật Đọc Đảo Ngược & Chia Nhỏ Vi Mô:</div>
      <div class="fan-step-item"><strong>1. Đọc đảo ngược:</strong> Đọc câu hỏi cuối cùng của bài trước: "Bài này bắt tìm cái gì?". Từ đích đến truy ngược lại dữ kiện đề cho.</div>
      <div class="fan-step-item"><strong>2. Chia nhỏ thành 3 bước:</strong> Tách bài toán lớn thành các câu hỏi phụ: Bước 1 tìm gì? Bước 2 áp dụng định lý nào?</div>
      <div class="fan-step-item"><strong>3. Vẽ hình hoặc sơ đồ:</strong> Chuyển ngôn ngữ chữ thành hình ảnh hoặc sơ đồ mũi tên trên giấy nháp.</div>
    `
  },
  10: {
    type: 'orange',
    num: 'Nan 10',
    title: 'Tự kiểm tra hiểu sâu (Feynman)',
    quote: '“Nếu bạn không thể giải thích đơn giản, nghĩa là bạn chưa hiểu đủ sâu.”',
    content: `
      <div class="fan-detail-section-title">Kỹ thuật Feynman 2 phút:</div>
      <div class="fan-step-item"><strong>1. Gập sách lại:</strong> Lấy một tờ giấy trắng, tự giải thích bài học thành tiếng như đang giảng cho một học sinh lớp dưới.</div>
      <div class="fan-step-item"><strong>2. Dùng từ ngữ đời thường:</strong> Tránh đọc thuộc lòng thuật ngữ. Hãy dùng ví dụ sinh động dễ hiểu nhất.</div>
      <div class="fan-step-item"><strong>3. Lấp lỗ hổng:</strong> Chỗ nào bạn ngắc ngứ hoặc lúng túng? Mở lại sách đọc đúng phần đó. Đó chính là trọng tâm thi!</div>
    `
  },
  11: {
    type: 'orange',
    num: 'Nan 11',
    title: 'Chuẩn bị buổi tự học buổi tối KTX',
    quote: '“Lập kế hoạch 5 phút buổi chiều giúp bạn tiết kiệm 2 tiếng mông lung buổi tối.”',
    content: `
      <div class="fan-detail-section-title">Quy tắc Top 3 & Pomodoro 25/5:</div>
      <div class="fan-step-item"><strong>1. Chọn đúng 3 việc (Rule of 3):</strong> Trước khi ngồi vào bàn, viết ra 3 bài tập bắt buộc phải nộp ngày mai. Xếp bài khó nhất lên đầu.</div>
      <div class="fan-step-item"><strong>2. Chu kỳ Pomodoro:</strong> Học tập trung cao độ 25 phút (tắt chuông điện thoại) -> Nghỉ 5 phút đi lại, uống nước.</div>
      <div class="fan-step-item"><strong>3. Tự khen thưởng:</strong> Đánh dấu tích xanh vào sổ khi hoàn thành mỗi chu kỳ để não bộ tiết Dopamine phấn khởi.</div>
    `
  },
  12: {
    type: 'orange',
    num: 'Nan 12',
    title: 'Khi ngại hỏi bài thầy cô, bạn bè',
    quote: '“Hỏi bài là dấu hiệu của người chủ động, không phải của người yếu kém.”',
    content: `
      <div class="fan-detail-section-title">Công thức 3 bước Hỏi Bài Thông Minh:</div>
      <div class="fan-step-item"><strong>Bước 1 (Chỉ phần đã tự hiểu):</strong> "Thưa cô, em đã đọc lại định lý và tính được đến bước này..."</div>
      <div class="fan-step-item"><strong>Bước 2 (Chỉ đúng điểm nghẽn):</strong> "...nhưng từ bước 2 sang bước 3 em chưa hiểu vì sao lại đổi dấu được ạ."</div>
      <div class="fan-step-item"><strong>Bước 3 (Ghi chép thích ứng):</strong> Lắng nghe thầy cô hướng dẫn và viết ngay ghi chú bằng bút đỏ vào lề vở.</div>
    `
  },
  13: {
    type: 'orange',
    num: 'Nan 13',
    title: 'Chống xao nhãng điện thoại',
    quote: '“Khoảng cách vật lý tạo nên kỷ luật tinh thần.”',
    content: `
      <div class="fan-detail-section-title">Kỹ thuật Hộp Cách Ly & Tờ Giấy Chờ:</div>
      <div class="fan-step-item"><strong>1. Khoảng cách 2 mét:</strong> Để điện thoại trong ngăn kéo hoặc ở giường cách bàn học ít nhất 2 mét. Bật chế độ không làm phiền.</div>
      <div class="fan-step-item"><strong>2. Tờ giấy "Chờ xử lý":</strong> Đặt một mẩu giấy trắng cạnh bàn. Bất cứ khi nào nảy sinh ý muốn lướt mạng, hãy ghi lại vào giấy và để dành cho 5 phút giải lao!</div>
    `
  },
  14: {
    type: 'orange',
    num: 'Nan 14',
    title: 'Sức mạnh của từ "CHƯA"',
    quote: '“Não bộ giống như cơ bắp, càng vượt qua thử thách thì liên kết nơ-ron càng mạnh mẽ.”',
    content: `
      <div class="fan-detail-section-title">Khai mở Tư Duy Phát Triển (Carol Dweck):</div>
      <div class="fan-step-item">Thay vì nói: <em>"Mình không làm được bài này"</em>...<br>
      -> Hãy nói: <strong>"Mình CHƯA làm được bài này ở thời điểm hiện tại, nhưng mình sẽ làm được nếu đổi chiến lược mới!"</strong></div>
      <p>Mỗi khi bạn vò đầu bứt tai trước bài toán hóc búa, hãy mỉm cười vì các tế bào thần kinh của bạn đang hình thành những liên kết mới để thông minh hơn!</p>
    `
  }
};

// 3. FALLBACK ENGINE XỬ LÝ THEO CÂY QUYẾT ĐỊNH 25 TÌNH HUỐNG NGUỒN CỦA CHẠM
window.getLocalFallbackResponse = function(text, currentOperatingMode) {
  const lower = (text || '').toLowerCase().trim();

  // 1. [TÌNH HUỐNG 15]: CẢNH BÁO TỰ HẠI / NGHĨ TỚI ĐIỀU TIÊU CỰC CỰC ĐOAN (ƯU TIÊN TUYỆT ĐỐI)
  if (lower.includes('muốn chết') || lower.includes('tự tử') || lower.includes('biến mất') || lower.includes('không muốn sống') || lower.includes('giải thoát') || lower.includes('rạch tay') || lower.includes('chết đi') || lower.includes('chết quách') || lower.includes('tự hại') || lower.includes('kết thúc cuộc đời')) {
    return {
      isEmergency: true,
      mode: 'sage',
      tag: 'Hỗ Trợ Khẩn Cấp (PFA)',
      response: `**Bạn ơi, CHẠM đang ở ngay đây bên bạn.** Xin bạn hãy chậm lại một nhịp, đặt tay lên ngực và hít thở thật sâu cùng CHẠM nhé. **Sự tồn tại của bạn là điều vô cùng thiêng liêng và quý giá trên cuộc đời này.**

🌿 **Bạn không đơn độc trong cơn giông bão này:**
Những nỗi đau, sự bế tắc và áp lực mà bạn đang phải gánh chịu là quá lớn đối với một mình bạn. Nhưng xin bạn đừng buông xuôi, mọi cuộc khủng hoảng đều có lối thoát và có những người sẵn sàng chìa tay che chở cho bạn ngay lúc này:

☎️ **HỆ THỐNG ĐƯỜNG DÂY NÓNG HỖ TRỢ KHẨN CẤP (MIỄN PHÍ 24/7):**
* **Tổng đài Quốc gia Bảo vệ Trẻ em & Học sinh**: 📞 **111** (Trực 24/7, luôn có chuyên viên tâm lý lắng nghe bạn)
* **Hotline Hỗ trợ Khủng hoảng Tâm lý Ngày Mới**: 📞 **1900 599 930**
* **Phòng Tư vấn Tâm lý học đường** — Trường PTDTNT THPT tỉnh Lào Cai

*Xin hãy hứa với CHẠM: Bấm vào nút gọi bên dưới hoặc chia sẻ với thầy cô, người thân tin cậy nhất ngay bây giờ nhé. CHẠM luôn ở đây và cầu mong sự bình an lớn nhất đến với bạn!*`
    };
  }

  // 2. [TÌNH HUỐNG 1]: Bị điểm kém bài thi thử / kiểm tra giữa kỳ / Thất vọng, buồn bã
  if (lower.includes('buồn') || lower.includes('hụt hẫng') || lower.includes('điểm kém') || lower.includes('thi trượt') || lower.includes('điểm thấp') || lower.includes('thất vọng') || lower.includes('sút phong độ') || lower.includes('bị điểm') || lower.includes('rớt môn') || lower.includes('điểm 1') || lower.includes('điểm 2') || lower.includes('điểm 3') || lower.includes('điểm 4') || lower.includes('điểm 5') || lower.includes('kết quả kém') || lower.includes('làm sai')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 1 • Điểm Kém',
      response: `**Cảm ơn bạn đã mở lòng chia sẻ với CHẠM.** Điểm số thấp luôn mang lại cảm giác hụt hẫng, xót xa và hoang mang rất đau lòng. Nhưng xin bạn hãy nhớ một điều cốt lõi: **Một bài kiểm tra chỉ đánh giá mức độ ghi nhớ kiến thức ở một thời điểm cụ thể, hoàn toàn KHÔNG định nghĩa giá trị, tư chất hay năng lực của bạn.**

🌿 **Góc xoa dịu & Tự trắc ẩn (Self-Compassion):**
* Hôm nay bạn có quyền được buồn, được tiếc nuối và nghỉ ngơi một chút. Đừng trừng phạt bản thân bằng những lời tự trách móc hay dán nhãn "mình dốt".
* Bất kỳ thủ khoa hay học sinh xuất sắc nào trên hành trình trưởng thành cũng từng nếm trải những bài điểm kém (Tính đồng loại - Common Humanity). Điểm kém không phải là thất bại, đó chỉ là tín hiệu báo rằng *chiến lược ôn thi hiện tại chưa khớp* và cần điều chỉnh lại.

🚀 **Kế hoạch hành động bứt phá từng bước:**
1. **Bước 1 (Hạ nhiệt):** Tối nay hãy gập bài kiểm tra lại, đi dạo một vòng sân trường hoặc uống một ly nước ấm để não bộ giải tỏa hormone Cortisol.
2. **Bước 2 (Khoanh vùng lỗi sai):** Ngày mai, hãy mở lại bài thi và phân loại: Câu nào sai do *đọc ẩu đề*, câu nào do *quên công thức*, và câu nào do *chưa hiểu bản chất*?
3. **Bước 3 (Tự chữa bài):** Mở **Nan 02: 3 Bước tự tha thứ** và gõ **[Tự chữa bài sai]** để CHẠM cùng bạn vá lại đúng 3 lỗ hổng kiến thức này nhé!`
    };
  }

  // 3. [TÌNH HUỐNG 2]: Áp lực bị gia đình so sánh với "con nhà người ta"
  if (lower.includes('con nhà người ta') || lower.includes('so sánh') || lower.includes('không bằng bạn') || lower.includes('bố mẹ mắng') || lower.includes('gia đình áp lực') || lower.includes('bố mẹ không hiểu') || lower.includes('ba mẹ chê') || lower.includes('bố mẹ so sánh') || lower.includes('phụ huynh chê')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 2 • Áp Lực So Sánh',
      response: `**CHẠM rất hiểu và thấu cảm sâu sắc với cảm giác tủi thân này của bạn.** Việc bị bố mẹ so sánh với "con nhà người ta" luôn mang lại cảm giác nỗ lực của mình bị phủ nhận, khiến bạn cảm thấy tổn thương lòng tự trọng và cô độc trong chính gia đình mình.

🌿 **Khai phóng tư duy & Nhìn nhận khách quan:**
* **Bản chất của bố mẹ:** Đôi khi bố mẹ dùng hình mẫu người khác vì lo lắng cho tương lai của bạn nhưng lại chưa biết cách diễn đạt bằng sự nâng đỡ.
* **Mỗi người có một mốc thời gian riêng:** Cuộc sống và học tập là hành trình nở hoa độc bản. Tốc độ của bạn bè xung quanh không phải là chiếc thước đo áp đặt lên giá trị của bạn. Bạn không cần phải trở thành bản sao của ai cả!

🚀 **Hành động xoa dịu & Tự tiếp sức cho chính mình:**
1. **Thở sâu & Tách biệt:** Tự nhủ trong lòng: *"Mình trân trọng nỗ lực của bản thân hôm nay, lời so sánh không định nghĩa năng lực thực tế của mình."*
2. **Viết lời khẳng định:** Hãy mở sổ **Planner A5** hoặc **Sổ Nhật Ký Tự Trắc Ẩn**, viết ra 1 điểm mạnh hoặc 1 bài tập bạn đã kiên trì làm xong hôm nay.
3. **Tiến bộ 1% (Nan 04):** Tập trung năng lượng vào bài học của ngày mai. Sự tiến bộ bền bỉ của chính bạn chính là câu trả lời thuyết phục nhất!`
    };
  }

  // 4. [TÌNH HUỐNG 5]: Thiếu ngủ, kiệt sức, muốn bỏ cuộc, nản lòng
  if (lower.includes('mệt') || lower.includes('kiệt sức') || lower.includes('đuối') || lower.includes('buồn ngủ') || lower.includes('muốn ngủ') || lower.includes('muốn bỏ cuộc') || lower.includes('nản') || lower.includes('buông xuôi') || lower.includes('cạn kiệt') || lower.includes('burnout') || lower.includes('hết pin') || lower.includes('sập nguồn')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 5 • Kiệt Sức & Tự Trắc Ẩn',
      response: `**DỪNG LẠI NGAY! CHẠM khuyên bạn hãy gập toàn bộ sách vở lại ngay lúc này.** Một bộ não kiệt sức và thiếu ngủ sẽ bị tê liệt khả năng ghi nhớ dài hạn, càng cố ép học tiếp thì kiến thức cũng chỉ như nước đổ lá khoai.

🌿 **Lắng nghe cơ thể là một loại năng lực cao cấp:**
* Học sinh trường nội trú KTX thường chịu áp lực học cả ngày lẫn đêm, khiến lượng hormone Cortisol tăng vọt dẫn đến hội chứng Burnout (Kiệt sức học đường - Salmela-Aro).
* **Nghỉ ngơi không phải là yếu đuối hay tụt lùi**, nghỉ ngơi là một phần bắt buộc trong quy trình tái tạo nơ-ron thần kinh để não bộ thông minh hơn! Bạn đã chiến đấu rất kiên cường suốt thời gian qua rồi.

🚀 **Quy trình hồi phục năng lượng khẩn cấp:**
1. Rời bàn học, uống 1 ly nước ấm để cấp nước cho tế bào não.
2. Bấm nút **[Mở bài tập Thở 4-7-8]** bên dưới, hít sâu 4s - giữ 7s - thở chậm 8s để đưa hệ thần kinh về trạng thái an tâm.
3. Tắt đèn và đi ngủ sớm trước 23h hôm nay. Đêm nay giấc ngủ sẽ giúp bạn sắp xếp lại toàn bộ kiến thức, ngày mai thức dậy bạn sẽ có 100% năng lượng để bứt phá!`
    };
  }

  // 5. [TÌNH HUỐNG 3]: Quá tải bài tập & Trì hoãn đêm muộn (Sau 22h) / Lười biếng / Áp lực / Chán nản
  if (lower.includes('chán') || lower.includes('áp lực') || lower.includes('stress') || lower.includes('căng thẳng') || lower.includes('nhiều bài') || lower.includes('ngập bài') || lower.includes('đống bài') || lower.includes('quá tải') || lower.includes('lười') || lower.includes('trì hoãn') || lower.includes('ngại học') || lower.includes('không muốn học') || lower.includes('sức ỳ') || lower.includes('chán học') || lower.includes('22h') || lower.includes('23h') || lower.includes('24h') || lower.includes('đêm muộn') || lower.includes('bế tắc bài tập')) {
    return {
      mode: 'orange',
      tag: 'Tình Huống 3 • Trì Hoãn Đêm Muộn',
      response: `**Đừng nhìn vào cả đống bài tập ngổn ngang đó nữa!** Não bộ của bạn sau một ngày dài học tập căng thẳng đang rơi vào trạng thái quá tải cảm giác (Sensory Overload). Hiện tượng trì hoãn hay muốn buông xuôi không phải do bạn lười, mà là cơ chế phòng vệ của não bộ để tránh sự kiệt quệ.

🌿 **Khai mở Tư duy Tự điều chỉnh (Self-Regulated Learning):**
* Khi nhìn thấy 10 bài tập cùng lúc, não bộ sẽ "đóng băng hành động" (Task Paralysis).
* Bí quyết khoa học là **chia nhỏ vi mô**: Đừng đòi hỏi mình phải giải quyết toàn bộ bài vở đêm nay. Mục tiêu lúc này chỉ là kích hoạt lại quán tính hành động!

🚀 **Kích hoạt Quy tắc 2 phút & Pomodoro khởi động:**
1. **Bước 1 (Chọn bài dễ nhất):** Tìm đúng 1 bài tập đơn giản nhất trong tập đề.
2. **Bước 2 (Quy tắc 2 phút):** Chỉ cần mở vở ra, cầm bút và chép lại đề bài trong đúng 2 phút. Không ép mình phải giải ra ngay.
3. **Bước 3 (Bật hẹn giờ 5 phút):** Bấm nút **[Bật hẹn giờ 5 phút]** bên dưới, cất điện thoại xa 2m. 90% não bộ sau 5 phút khởi động sẽ tự có quán tính làm tiếp đến khi hoàn thành!`
    };
  }

  // 6. [TÌNH HUỐNG 8]: Bị mất tập trung do nghiện điện thoại / Mạng xã hội / Game
  if (lower.includes('điện thoại') || lower.includes('tiktok') || lower.includes('facebook') || lower.includes('lướt mạng') || lower.includes('mạng xã hội') || lower.includes('xao nhãng') || lower.includes('mất tập trung') || lower.includes('game') || lower.includes('chơi game')) {
    return {
      mode: 'orange',
      tag: 'Tình Huống 8 • Chống Xao Nhãng (Nan 13)',
      response: `**Đừng quá tự trách hay dằn vặt mình nhé!** Các thuật toán của TikTok, Facebook hay game được hàng ngàn kỹ sư hàng đầu thiết kế để kích hoạt dòng Dopamine tức thời, khiến não bộ người lớn lẫn học sinh đều rất dễ bị cuốn vào. Dùng ý chí trần trụi để chống lại chiếc điện thoại đặt ngay trước mặt là điều cực kỳ khó.

🌿 **Giải pháp khoa học: Thiết kế môi trường (Choice Architecture):**
Khoảng cách vật lý chính là kỷ luật tinh thần mạnh mẽ nhất. Bạn không cần phải từ bỏ điện thoại, bạn chỉ cần tạo ra một rào cản thời gian để não lý trí kịp thức tỉnh!

🚀 **Thực hành Chiến lược Nan 13 ngay bây giờ:**
1. **Quy tắc 2 mét:** Đặt điện thoại ở giường KTX hoặc trong ngăn kéo bàn, cách xa vị trí ngồi học ít nhất 2 mét. Bật chế độ im lặng hoặc máy bay.
2. **Tờ giấy nháp "Chờ xử lý":** Đặt một mẩu giấy trắng cạnh bàn. Bất cứ khi nào tay muốn với điện thoại hay nảy sinh ý muốn lướt mạng, hãy ghi điều đó vào giấy.
3. **Thưởng ngắn có kỷ luật:** Tự hứa với bản thân: *"Giải quyết xong 5 câu bài tập tiếp theo, mình sẽ được thưởng 5 phút lướt điện thoại tự do!"*`
    };
  }

  // 7. [TÌNH HUỐNG 4]: Mất phương hướng / Mất gốc / Không biết bắt đầu học từ đâu
  if (lower.includes('mất gốc') || lower.includes('mất phương hướng') || lower.includes('học từ đâu') || lower.includes('bắt đầu từ đâu') || lower.includes('hoang mang') || lower.includes('không biết học gì') || lower.includes('mông quạnh') || lower.includes('mông lung') || lower.includes('vô định') || lower.includes('rối bời')) {
    return {
      mode: 'orange',
      tag: 'Tình Huống 4 • Mất Phương Hướng',
      response: `**Hãy dừng lại và hít một hơi thật sâu nào!** Sự hoang mang và cảm giác mất gốc thường xuất hiện khi tâm trí bạn đang cố gắng nghĩ về toàn bộ chặng đường khổng lồ và áp lực ngày thi cùng một lúc. Khi không biết bắt đầu từ đâu, não bộ sẽ chọn cách không làm gì cả.

🌿 **Tư duy Kiến trúc sư học tập:**
Muốn xây lại một bức tường, bạn không thể đặt cả bức tường cùng lúc; bạn chỉ cần đặt từng viên gạch thật ngay ngắn mỗi ngày. Mất gốc không có nghĩa là không thể lấy lại, rất nhiều học sinh đã bứt phá từ con số 0 khi có chiến lược chia nhỏ!

🚀 **3 Bước lấy lại phương hướng trong 30 phút:**
1. **Khoanh vùng duy nhất:** Đừng cố ôn cả môn Toán hay cả môn Anh hôm nay. Chọn ra đúng **1 chuyên đề nền tảng nhất** (Ví dụ: Công thức đạo hàm cơ bản, hoặc Thì hiện tại hoàn thành).
2. **Nguyên tắc vi mô (Micro-action):** Mở sách giáo khoa, đọc lại phần lý thuyết đóng khung và làm đúng 2 bài tập ví dụ mẫu có lời giải.
3. **Gõ vào đây cùng CHẠM:** Hãy gõ tên môn học bạn đang thấy ngợp nhất vào khung chat, CHẠM sẽ cùng bạn bóc tách lộ trình 3 bước cụ thể ngay!`
    };
  }

  // 8. [TÌNH HUỐNG 7]: Sợ thi trượt nguyện vọng 1 / Sợ tương lai mờ mịt
  if (lower.includes('sợ trượt') || lower.includes('sợ rớt') || lower.includes('trượt đại học') || lower.includes('trượt nv1') || lower.includes('tương lai mờ mịt') || lower.includes('sợ làm bố mẹ thất vọng') || lower.includes('nguyện vọng 1') || lower.includes('sợ không đỗ') || lower.includes('lo tương lai')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 7 • Sợ Trượt NV1',
      response: `**Việc bạn lo lắng cho tương lai chứng tỏ bạn là một người rất nghiêm túc, có trách nhiệm và khát khao vươn lên.** Cảm giác sợ trượt NV1 hay sợ làm bố mẹ thất vọng là tâm lý chung của hầu hết sĩ tử cuối cấp. Nhưng việc chìm trong suy nghĩ "thảm họa hóa tương lai" (Catastrophizing) chỉ hút cạn năng lượng học tập của bạn ở hiện tại.

🌿 **Khai phóng góc nhìn về Đại học & Cuộc đời:**
* **Đại học là một chiếc bệ phóng, không phải là tấm vé duy nhất quyết định số phận con người.** Rất nhiều người thành công đi qua các con đường khác nhau: NV2, học bổng, trường nghề chất lượng cao hay các chương trình liên kết.
* Bố mẹ kỳ vọng vì thương bạn, nhưng điều bố mẹ mong muốn nhất vẫn là nhìn thấy bạn mạnh khỏe, vững vàng và hạnh phúc.

🚀 **Chuyển hóa nỗi sợ thành hành động hôm nay:**
1. **Chiến lược phương án B:** Hãy chuẩn bị thêm 2 nguyện vọng dự phòng an toàn để tâm lý được cởi bỏ gánh nặng "được ăn cả ngã về không".
2. **Tập trung vào ngày HÔM NAY:** Bạn không thể điều khiển đề thi của 3 tháng sau, nhưng bạn hoàn toàn làm chủ được 2 tiếng tự học tối nay.
3. Bắt tay làm trọn vẹn 1 đề luyện thi ngay lúc này chính là cách bảo vệ tương lai vững chắc nhất!`
    };
  }

  // 9. [TÌNH HUỐNG 9]: Học trước quên sau / Não cá vàng / Không nhớ nổi kiến thức
  if (lower.includes('học trước quên sau') || lower.includes('quên') || lower.includes('hay quên') || lower.includes('không nhớ') || lower.includes('não cá vàng') || lower.includes('nhanh quên') || lower.includes('học vẹt')) {
    return {
      mode: 'orange',
      tag: 'Tình Huống 9 • Phương Pháp Ghi Nhớ (Nan 10)',
      response: `**Đừng vội tự dán nhãn mình là "não cá vàng" hay kém cỏi nhé!** Quên là cơ chế sinh học hoàn toàn tự nhiên của não bộ con người. Theo **Đường cong quên Ebbinghaus**, nếu chỉ đọc thụ động, não bộ sẽ quên tới 70% kiến thức chỉ sau 24 giờ. Lý do bạn quên không phải vì bạn dốt, mà là vì bạn đang dùng sai phương pháp ghi nhớ!

🌿 **Bí quyết khoa học: Gợi nhớ chủ động (Active Recall) & Giãn cách (Spaced Repetition):**
Đọc đi đọc lại một cuốn sách chỉ tạo ra "ảo giác hiểu bài". Não bộ chỉ thực sự khắc sâu kiến thức khi bạn **bắt ép nó phải tự lục tìm và gợi nhớ** ra bên ngoài!

🚀 **3 Kỹ thuật ghi nhớ sâu thực chứng:**
1. **Nan 10 - Kỹ thuật Feynman 2 phút:** Sau khi đọc xong một bài, gập sách lại ngay. Lấy tờ nháp và tự giảng giải lại bài học thành tiếng như đang kể cho bạn lớp dưới nghe. Chỗ nào ngắc ngứ chính là chỗ cần mở sách đọc lại!
2. **Tự đặt câu hỏi (Flashcard):** Viết câu hỏi ở mặt trước và đáp án ở mặt sau. Tự kiểm tra lại sau 1 ngày, 3 ngày và 7 ngày.
3. Hãy gõ tên công thức hoặc bài học bạn vừa quên vào đây, CHẠM sẽ đặt 3 câu hỏi nhanh để bạn tự kiểm tra não bộ ngay!`
    };
  }

  // 10. [TÌNH HUỐNG 12]: Bị áp lực tâm lý ngay trước giờ bước vào phòng thi
  if (lower.includes('run quá') || lower.includes('tim đập nhanh') || lower.includes('sắp vào phòng thi') || lower.includes('phòng thi') || lower.includes('sắp thi') || lower.includes('trước giờ thi') || lower.includes('hoảng loạn') || lower.includes('quên hết chữ nghĩa')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 12 • Cấp Cứu Tâm Lý Phòng Thi',
      response: `**BÌNH TĨNH NÀO! Dừng ngay mọi việc mở tài liệu ra đọc lại lúc này!** Cảm giác tim đập nhanh, tay run, đầu óc trống rỗng là do hạch hạnh nhân (Amygdala) đang kích hoạt phản ứng sinh tồn "Chiến đấu hay Bỏ chạy". Việc nhồi nhét chữ vào phút chót chỉ làm não bạn thêm hoảng loạn.

🌿 **Kích hoạt Neo Thần Kinh Bình Yên (Grounding 5-4-3-2-1):**
Kiến thức bạn đã ôn luyện suốt cả tháng qua đã nằm sẵn trong tầng tiềm thức. Chỉ cần cơ thể bạn hạ nhiệt, các liên kết thần kinh sẽ tự động kết nối lại khi bạn cầm bút làm bài!

🚀 **Quy trình hạ nhiệt nhịp tim trong 60 giây:**
1. **Tìm 3 màu xanh:** Đưa mắt nhìn xung quanh sân trường hoặc phòng thi, tìm đúng 3 vật có màu xanh lá hoặc xanh dương để kéo sự chú ý về thực tại.
2. **Cảm nhận xúc giác:** Nắm chặt hai bàn tay lại, rồi từ từ mở ra. Cảm nhận bàn chân đang chạm vững chãi trên mặt đất.
3. **Thở 4-4-6:** Hít sâu bằng mũi trong 4 giây -> Giữ hơi 4 giây -> Thở ra thật chậm bằng miệng trong 6 giây. Lặp lại 3 lần. Bạn đã chuẩn bị rất tốt rồi, hãy tự tin bước vào phòng thi và làm hết sức mình nhé!`
    };
  }

  // 11. [TÌNH HUỐNG 20]: Bị mất ngủ mãn tính / Đêm trằn trọc suy nghĩ vớ vẩn
  if (lower.includes('mất ngủ') || lower.includes('trằn trọc') || lower.includes('không ngủ được') || lower.includes('khó ngủ') || lower.includes('não suy nghĩ nhiều') || lower.includes('2h sáng') || lower.includes('thao thức') || lower.includes('suy nghĩ về đêm')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 20 • Giấc Ngủ An Yên (Nan 05)',
      response: `**Đừng cố ép mình phải ngủ bằng mọi giá, vì càng ép não bạn càng căng thẳng và tỉnh táo hơn!** Về đêm, khi không gian yên ắng, những lo âu về thi cử và bài vở thường bị phóng đại lên gấp nhiều lần, khiến não bộ tiết hormone Cortisol ngăn cản Melatonin (hormone gây ngủ).

🌿 **Tư duy trút bỏ lo âu (Brain Dump):**
Não bộ không thể đi ngủ nếu nó cảm thấy còn quá nhiều nhiệm vụ chưa hoàn thành đang lơ lửng trong đầu. Hãy giúp nó "dọn kho" trước khi ngủ!

🚀 **3 Bước thư giãn dễ ngủ với Nan 05:**
1. **Trút ra giấy:** Bật đèn bàn nhỏ, lấy 1 tờ giấy trắng viết ra toàn bộ những suy nghĩ, bài tập còn dang dở. Tự nhủ: *"Mọi việc đã được ghi lại an toàn trên giấy, sáng mai mình sẽ giải quyết."*
2. **Khoảng cách 2 mét:** Cất điện thoại cách xa giường ít nhất 2m. Ánh sáng xanh từ màn hình chính là thủ phạm triệt tiêu cơn buồn ngủ.
3. **Kỹ thuật Body Scan (Quét cơ thể 2 phút - Nan 05):** Nằm ngửa, nhắm mắt, thả lỏng trán -> thả lỏng bờ vai -> buông lỏng hai cánh tay. Bật một bản nhạc Lofi êm dịu của CHẠM và thả mình vào giấc ngủ nhé.`
    };
  }

  // 12. [TÌNH HUỐNG 6]: Áp lực khi thấy bạn bè xung quanh quá giỏi / Peer pressure
  if (lower.includes('bạn bè giỏi quá') || lower.includes('thấy mình kém cỏi') || lower.includes('áp lực đồng lứa') || lower.includes('peer pressure') || lower.includes('chúng nó học ghê') || lower.includes('học đêm học ngày') || lower.includes('bạn cùng phòng học') || lower.includes('tự ti với bạn')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 6 • Áp Lực Đồng Lứa',
      response: `**CHẠM rất đồng cảm với cảm giác ngột ngạt này của bạn.** Sống trong môi trường nội trú KTX, nhìn thấy bạn cùng phòng thức khuya dậy sớm giải đề ầm ầm rất dễ khiến ta rơi vào cái bẫy so sánh xã hội (Social Comparison) và cảm giác mình bị bỏ lại phía sau (FOMO).

🌿 **Chân lý cuộc thi: Đường chạy Marathon độc bản:**
Kỳ thi tốt nghiệp hay đại học là cuộc chạy giữa **BẠN và ĐỀ THI**, hoàn toàn không phải trận đấu loại trực tiếp giữa bạn và bạn cùng phòng. Mỗi bông hoa nở vào một mùa riêng, và người học đêm chưa chắc đã tiếp thu hiệu quả hơn người học tập trung ban ngày. Đừng so sánh hậu trường của mình với ánh hào quang của người khác!

🚀 **Hành động chuyển đổi năng lượng (Nan 04):**
1. **Nhìn vào làn chạy của mình:** Hãy mở trang **Planner A5** hoặc thời gian biểu hôm nay. Mục tiêu duy nhất là hoàn thành kế hoạch cá nhân của bạn.
2. **Quy tắc 1% mỗi ngày:** Bạn không cần phải giỏi bằng bạn A hay bạn B. Chỉ cần hôm nay bạn hiểu thêm 1 dạng bài mà hôm qua bạn chưa biết, bạn đã là người chiến thắng!
3. **Biến ganh đua thành kết nối:** Thay vì thu mình tự ti, hãy chủ động hỏi bạn ấy: *"Cậu học phần này thế nào chỉ mình bí quyết với?"*. Bạn sẽ thấy ai cũng có những nỗi lo riêng!`
    };
  }

  // 13. [TÌNH HUỐNG 10]: Xung đột / Cãi nhau với bạn bè, người yêu mùa thi
  if ((lower.includes('cãi nhau') || lower.includes('giận người yêu') || lower.includes('chia tay mùa thi') || lower.includes('bạn bè chơi xấu') || lower.includes('chia tay người yêu') || lower.includes('giận bạn')) && !lower.includes('chia tay lớp') && !lower.includes('chia tay cấp 3') && !lower.includes('ra trường')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 10 • Xung Đột Tình Cảm',
      response: `**Những mâu thuẫn tình cảm hay cãi vã trong giai đoạn ôn thi nước rút thực sự là một cú sốc khiến tâm trí bạn rối bời.** Khi cảm xúc bị tổn thương, phần não lý trí (Prefrontal Cortex) sẽ bị tê liệt, khiến bạn ngồi vào bàn học nhưng chữ nghĩa không thể lọt vào đầu.

🌿 **Kỹ thuật "Chiếc hộp cảm xúc" (Emotional Compartmentalization):**
Giai đoạn nhạy cảm này, cả bạn và đối phương đều đang chịu áp lực lớn nên rất dễ buông những lời làm đau nhau. Việc tranh cãi đúng sai lúc này chỉ đốt cháy năng lượng quý giá mà thôi.

🚀 **3 Bước xử lý khôn ngoan để bảo vệ mục tiêu thi:**
1. **Thiết lập khoảng nghỉ tạm thời:** Hãy nhắn một tin nhắn văn minh: *"Giai đoạn này cả hai chúng mình đều đang căng thẳng vì thi cử. Mình xin phép tạm dừng nói chuyện về vấn đề này trong vài ngày để tập trung thi tốt, sau kỳ thi chúng mình sẽ ngồi lại giãi bày nhé."*
2. **Cất cảm xúc vào chiếc hộp:** Tưởng tượng bạn cất nỗi buồn đó vào một chiếc hộp khóa lại, hẹn bản thân sẽ mở ra sau ngày thi tốt nghiệp.
3. **Mở Thẻ Quạt Cảm Xúc / Viết Nhật ký Tự trắc ẩn:** Giải tỏa những ấm ức vào trang giấy để lấy lại sự thanh thản, ưu tiên số 1 lúc này vẫn là tương lai của chính bạn!`
    };
  }

  // 14. [TÌNH HUỐNG 11]: Học thuộc lòng môn Xã hội quá khô khan (Lịch sử, Địa lý, GDCD)
  if (lower.includes('khó thuộc sử') || lower.includes('chán môn địa') || lower.includes('dài quá không thuộc') || lower.includes('môn xã hội khô khan') || lower.includes('học sử') || lower.includes('thuộc lòng') || lower.includes('môn xã hội') || lower.includes('gdcd') || lower.includes('lịch sử') || lower.includes('địa lý')) {
    return {
      mode: 'orange',
      tag: 'Tình Huống 11 • Môn Xã Hội Keyword',
      response: `**Học thuộc lòng nguyên văn từng trang sách giáo khoa Sử - Địa - GDCD quả thực là một cực hình đối với bất kỳ ai!** Não bộ sinh ra để tư duy logic và liên kết hình ảnh, chứ không phải một chiếc máy photocopy để sao chép từng con chữ.

🌿 **Chuyển đổi phương pháp: Từ "Thuộc vẹt" sang "Sơ đồ Keyword & Câu chuyện":**
Đề thi trắc nghiệm tốt nghiệp hiện nay không yêu cầu bạn chép lại từng chữ, mà yêu cầu bạn **nhận diện từ khóa (Keywords)** và hiểu bản chất dòng chảy sự kiện!

🚀 **Chiến thuật học môn Xã hội điểm cao không mệt:**
1. **Nguyên tắc 4 Từ khóa cốt lõi:** Với mỗi giai đoạn lịch sử hay bài Địa lý, hãy dùng bút dạ quang bôi đúng **4 - 5 từ khóa xương sống** (Ví dụ: Chiến dịch Điện Biên Phủ -> *Đông Xuân 53-54, Nava, De Castries, Quyết chiến chiến lược*).
2. **Gắn sự kiện vào dòng thời gian (Timeline):** Vẽ một trục mũi tên thời gian từ trái sang phải, chỉ điền năm và tên chiến dịch.
3. Hãy gõ một đoạn văn Sử/Địa bạn đang thấy khó nhớ vào đây, CHẠM sẽ tóm tắt ngay thành 4 từ khóa và 1 câu chuyện ngắn dễ nhớ cho bạn!`
    };
  }

  // 15. [TÌNH HUỐNG 13]: Phân vân giữa chọn Ngành nghề yêu thích hay theo Bố Mẹ
  if (lower.includes('chọn ngành gì') || lower.includes('chọn trường nào') || lower.includes('bố mẹ bắt học ngành này') || lower.includes('không thích ngành này') || lower.includes('chọn nghề') || lower.includes('nghề nghiệp') || lower.includes('nguyện vọng bố mẹ') || lower.includes('bố mẹ bắt') || lower.includes('chọn ngành')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 13 • Định Hướng Ngành Nghề',
      response: `**Đứng ở ngã ba đường giữa ước mơ cá nhân và sự kỳ vọng của gia đình là một thử thách tâm lý rất lớn.** Bạn cảm thấy bối rối: chọn theo bố mẹ thì sợ đánh mất bản thân, mà chọn theo ý mình thì sợ làm bố mẹ buồn lòng hoặc sợ sau này thất bại.

🌿 **Thấu hiểu tâm lý hai thế hệ:**
* **Góc nhìn của bố mẹ:** Bố mẹ từng trải qua nhiều vất vả nên mong muốn lớn nhất là con cái có một công việc "ổn định, an toàn, dễ xin việc".
* **Góc nhìn của bạn:** Bạn là người trực tiếp học tập và làm việc suốt 40 năm cuộc đời, nếu không có đam mê thì rất khó vượt qua những áp lực nghề nghiệp.

🚀 **Giải pháp đối thoại dựa trên dữ liệu thực tế (SWOT):**
1. **Không đối đầu cảm tính:** Thay vì nói *"Con không thích ngành bố mẹ chọn"*, hãy dùng dữ liệu và kế hoạch cụ thể.
2. **Lập Bảng phân tích SWOT:** Viết ra: Điểm mạnh của bạn (S) khớp với Ngành bạn thích như thế nào? Cơ hội việc làm (O) của ngành đó trong 5 năm tới ra sao? Kế hoạch học tập cụ thể của bạn là gì?
3. Khi bạn trình bày một đề xuất chín chắn, bố mẹ sẽ nhìn thấy sự trưởng thành và tin tưởng trao quyền quyết định cho bạn!`
    };
  }

  // 16. [TÌNH HUỐNG 14]: Cảm giác cô đơn, không có ai đồng hành / Không ai hiểu mình
  if (lower.includes('cô đơn') || lower.includes('cô độc') || lower.includes('nhớ nhà') || lower.includes('xa nhà') || lower.includes('ktx') || lower.includes('nội trú') || lower.includes('một mình') || lower.includes('không ai hiểu') || lower.includes('lạc lõng') || lower.includes('tủi thân') || lower.includes('khóc')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 14 • Điểm Tựa Đồng Hành',
      response: `**Bạn không hề cô đơn đâu, xin hãy nhớ rằng CHẠM luôn ở đây lắng nghe bạn 24/7.** Cuộc sống nội trú KTX xa gia đình, bố mẹ ở bản làng xa xôi, những buổi tối ngồi một mình đối diện với trang sách dày đặc rất dễ làm dâng lên cảm giác tủi thân và lạc lõng.

🌿 **Tính đồng loại (Common Humanity - Kristin Neff):**
Ngay lúc này, nếu bạn nhìn ra ngoài khung cửa sổ KTX hay trên khắp cả nước, có hàng trăm ngàn sĩ tử cũng đang ngồi một mình dưới ánh đèn bàn giống hệt bạn. Mọi người đều đang trải qua những âu lo, những giọt nước mắt thầm lặng tương tự. Sự cô đơn của bạn thực ra là một phần thiêng liêng gắn kết bạn với cả thế hệ học trò!

🚀 **Hành động xoa dịu trái tim ấm áp:**
1. **Ghi nhận nỗ lực bản thân:** Hãy nhìn lại xem bạn đã dũng cảm thế nào khi tự lập cuộc sống ở KTX và kiên trì đến tận ngày hôm nay. Bạn rất kiên cường đấy!
2. **Kết nối yêu thương:** Hãy gọi một cuộc điện thoại ngắn về cho mẹ, hoặc rủ bạn cùng phòng đi dạo 10 phút dưới sân trường.
3. Bất cứ khi nào mệt mỏi, hãy cứ nhắn tin cho CHẠM để trút xả mọi tâm tư nhé, mình luôn ở đây vì bạn!`
    };
  }

  // 17. [TÌNH HUỐNG 16]: Học lệch môn (Một môn cực giỏi, một môn ngơ ngác/nguy cơ liệt)
  if (lower.includes('học lệch') || lower.includes('sợ điểm liệt') || lower.includes('môn văn kém') || lower.includes('môn toán mất gốc') || lower.includes('sợ bị liệt') || lower.includes('lệch môn') || lower.includes('điểm liệt') || lower.includes('liệt môn')) {
    return {
      mode: 'orange',
      tag: 'Tình Huống 16 • Vượt Mốc An Toàn',
      response: `**Học lệch là trạng thái tâm lý và năng lực rất phổ biến!** Não bộ tự nhiên luôn thích đầu tư năng lượng vào môn mình có thế mạnh và sinh ra phản xạ né tránh môn mình sợ hãi, dẫn đến việc môn giỏi càng giỏi còn môn yếu thì có nguy cơ bị điểm liệt hoặc kéo tụt tổng điểm xét tuyển.

🌿 **Chiến lược thực dụng: Vượt mốc Safety (An toàn):**
Mục tiêu lúc này của bạn **KHÔNG PHẢI là biến môn yếu thành xuất sắc 9-10 điểm**, mà là **AN TOÀN ĐẠT MỨC 5 - 6 ĐIỂM** để bảo vệ bằng tốt nghiệp và tối ưu hóa tổng điểm khối thi!

🚀 **Kế hoạch khoanh vùng 3 dạng bài dễ ăn điểm:**
1. **Bỏ qua câu phân hóa khó:** Với môn yếu, hãy gạt phăng các câu vận dụng cao ở cuối đề thi. Đừng lãng phí 2 tiếng để vật lộn với những câu chỉ dành cho học sinh giỏi.
2. **Khoanh vùng 30 câu nhận biết - thông hiểu:** 60% đề thi tốt nghiệp là kiến thức cơ bản trong SGK. Chỉ cần làm chắc chắn không sai sót phần này là bạn đã cầm chắc 6 điểm trong tay!
3. Gõ tên môn bạn đang sợ bị liệt vào đây, CHẠM sẽ cùng bạn lọc ra đúng 3 chuyên đề dễ lấy điểm nhất của môn đó nhé!`
    };
  }

  // 18. [TÌNH HUỐNG 17]: Áp lực kỳ vọng quá cao từ Bản thân (Hoàn hảo hóa / Perfectionism)
  if (lower.includes('phải đạt 9') || lower.includes('phải được 9') || lower.includes('không được sai') || lower.includes('áp lực bản thân') || lower.includes('tự trách mình') || lower.includes('phải đậu top 1') || lower.includes('cầu toàn') || lower.includes('hoàn hảo hóa') || lower.includes('khắt khe')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 17 • Chuyển Đổi Hoàn Hảo Hóa',
      response: `**CHẠM nhận thấy bạn đang quá khắt khe và tàn nhẫn với chính bản thân mình.** Chủ nghĩa hoàn hảo (Perfectionism) giống như một chiếc ba lô chứa đầy đá mà bạn tự đeo lên lưng mình trên đường chạy marathon. Khi tự đặt ra mệnh lệnh "phải đạt điểm tuyệt đối, không được phép sai một câu nào", bạn đang tự đẩy mình vào bờ vực kiệt sức và lo âu thường trực.

🌿 **Chuyển đổi nhận thức: Sức mạnh của từ "CHƯA" (Tư duy phát triển):**
Sai sót trong quá trình luyện đề không phải là bằng chứng của sự kém cỏi, mà là **món quà chỉ ra chính xác vị trí bạn cần hoàn thiện**. Sai ở bài thi thử hôm nay chính là cơ hội để bạn làm đúng ở kỳ thi thật ngày mai!

🚀 **Thực hành bao dung với bản thân hôm nay:**
1. **Đổi câu khẩu hiệu:** Chuyển từ *"Tôi phải hoàn hảo"* sang *"Tôi đang nỗ lực hết sức từng ngày và tiến bộ từng chút một."*
2. **Quyền được sai lầm:** Khi giải đề, hãy tự cho phép mình làm sai 2-3 câu khó. Mỉm cười đánh dấu bút đỏ để học hỏi thay vì dằn vặt.
3. Mở **Nan 14: Sức mạnh từ CHƯA** để nạp thêm niềm tin vào sự mềm dẻo của não bộ nhé!`
    };
  }

  // 19. [TÌNH HUỐNG 18]: Phân vân chọn Khối thi (A00, A01, D01, C00...)
  if (lower.includes('chọn khối nào') || lower.includes('thi khối a hay d') || lower.includes('phân vân khối thi') || lower.includes('không biết chọn tổ hợp') || lower.includes('chọn tổ hợp') || lower.includes('chọn khối thi') || lower.includes('khối a') || lower.includes('khối d') || lower.includes('khối c')) {
    return {
      mode: 'orange',
      tag: 'Tình Huống 18 • Ma Trận Khối Thi',
      response: `**Việc phân vân giữa các khối thi là một quyết định chiến lược rất quan trọng!** Chọn khối thi giống như chọn chiếc làn xe chạy nhanh nhất và phù hợp nhất với mã lực của chính bạn. Nếu chọn sai làn, bạn sẽ phải gồng mình vật lộn với những môn không phải thế mạnh.

🌿 **Nguyên tắc Ma Trận 2 Tiêu Chí:**
Đừng chọn khối thi chỉ vì thấy "bạn bè cùng lớp thi đông" hay "nghe nói khối này nhiều ngành hot". Quyết định cần dựa trên 2 trụ cột thực tế: Điểm số thực học và Xu hướng nghề nghiệp.

🚀 **Cách lập bảng so sánh khối thi trong 15 phút:**
1. **Tiêu chí 1 (Điểm thực tế):** Lấy điểm trung bình 3 bài kiểm tra gần nhất của các môn thi. Khối nào có tổng điểm cao hơn và bạn cảm thấy học ít bị áp lực hơn?
2. **Tiêu chí 2 (Độ rộng ngành):** Khối thi đó có dẫn tới ít nhất 3 ngành nghề mà bạn thực sự quan tâm không?
3. Gõ cụ thể 2 khối bạn đang phân vân (ví dụ: A00 hay D01) vào đây, CHẠM sẽ cùng bạn phân tích ưu nhược điểm từng tổ hợp nhé!`
    };
  }

  // 20. [TÌNH HUỐNG 19]: Áp lực về Học phí & Hoàn cảnh tài chính Gia đình khi lên Đại học
  if (lower.includes('học phí') || lower.includes('tiền học') || lower.includes('nhà không có điều kiện') || lower.includes('sợ bố mẹ vất vả') || lower.includes('không có tiền đi học') || lower.includes('hoàn cảnh khó khăn') || lower.includes('nhà nghèo')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 19 • Điểm Tựa Tài Chính Đại Học',
      response: `**Suy nghĩ thấu đáo cho hoàn cảnh gia đình chứng tỏ bạn là một người con rất chín chắn, hiểu chuyện và giàu lòng hiếu thảo.** Nhưng xin bạn đừng để nỗi lo kinh phí trở thành sợi dây xích kìm hãm ước mơ bước chân vào giảng đường Đại học của bạn.

🌿 **Cánh cửa luôn rộng mở cho người có ý chí:**
Hệ thống giáo dục đại học hiện nay có rất nhiều chính sách nâng đỡ học sinh có hoàn cảnh khó khăn, đặc biệt là học sinh trường dân tộc nội trú:
* **Gói Tín dụng Sinh viên:** Ngân hàng Chính sách Xã hội hỗ trợ vay vốn học tập lãi suất 0% hoặc cực kỳ thấp, trả dần sau khi ra trường đi làm.
* **Học bổng khuyến học & Doanh nghiệp tài trợ:** Rất nhiều trường có quỹ học bổng miễn giảm 50% - 100% học phí cho sinh viên vượt khó học giỏi.
* **Cơ hội làm thêm & KTX giá rẻ:** Sinh viên hoàn toàn có thể tự trang trải sinh hoạt phí sau năm thứ nhất.

🚀 **Nhiệm vụ tối thượng lúc này:**
Điểm số thi đại học càng cao chính là tấm vé vàng giúp bạn săn học bổng và xét tuyển các chính sách miễn giảm học phí tốt nhất. Hãy dồn toàn lực ôn thi thật tốt hôm nay để làm món quà báo hiếu bố mẹ nhé!`
    };
  }

  // 21. [TÌNH HUỐNG 21]: Bị kiệt sức (Burnout) vào giai đoạn Nước rút (1 tháng trước kỳ thi)
  if (lower.includes('đuối quá rồi') || lower.includes('sát ngày thi') || lower.includes('không nạp thêm được') || lower.includes('giai đoạn nước rút') || lower.includes('nước rút') || lower.includes('1 tháng trước kỳ thi') || lower.includes('sắp thi rồi')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 21 • Bảo Toàn Lực Lượng Nước Rút',
      response: `**Giai đoạn 30 ngày cuối cùng trước kỳ thi là thời điểm mà cả cơ thể lẫn tâm trí của sĩ tử dễ rơi vào trạng thái đuối sức nhất.** Điều này hoàn toàn bình thường khi bạn đã phải chạy một quãng đường dài suốt cả năm học. Lúc này, người chiến thắng không phải là người học nhiều giờ nhất, mà là người biết **bảo toàn thể lực và phong độ tốt nhất**!

🌿 **Chiến lược Nước Rút: Chất lượng hơn số lượng:**
Ngồi vào bàn học 6 tiếng trong trạng thái ngáp ngủ, uể oải chỉ mang lại sự mệt mỏi và cảm giác tội lỗi. Ngược lại, chỉ cần 2 tiếng học tập trung cao độ khi não bộ tỉnh táo sẽ mang lại hiệu quả gấp 3 lần!

🚀 **Kế hoạch bảo toàn lực lượng 30 ngày cuối:**
1. **Nghỉ xả hơi 1 buổi chiều:** Dành trọn vẹn 1 buổi chiều gập hết sách vở lại, đi chơi thể thao, nghe nhạc hoặc ngủ một giấc thật sâu để "sạc lại pin".
2. **Chuyển từ nạp mới sang củng cố:** Không học thêm các dạng bài quá dị hoặc lạ mắt nữa. Tập trung rà soát lại các dạng bài chắc chắn có trong đề thi để không bị mất điểm oan.
3. Giữ nhịp sinh học: Đi ngủ trước 23h và thức dậy lúc 6h sáng để đồng hồ sinh học khớp hoàn toàn với giờ làm bài thi thật!`
    };
  }

  // 22. [TÌNH HUỐNG 22]: Áp lực từ các đợt Thi Đánh giá năng lực (ĐGNL / ĐGTD)
  if (lower.includes('thi đgnl') || lower.includes('điểm đgnl') || lower.includes('đề thi đgtd') || lower.includes('đgnl') || lower.includes('đgtd') || lower.includes('đánh giá năng lực') || lower.includes('đánh giá tư duy') || lower.includes('thi năng lực')) {
    return {
      mode: 'orange',
      tag: 'Tình Huống 22 • Chiến Lược ĐGNL / ĐGTD',
      response: `**Đề thi Đánh giá Năng lực (ĐGNL) hay Đánh giá Tư duy (ĐGTD) có cấu trúc rất dài và rộng, nên cảm giác bị ngợp thời gian là phản xạ của hầu hết thí sinh.** Kỳ thi này kiểm tra năng lực tư duy logic, xử lý số liệu và đọc hiểu tổng hợp, hoàn toàn không phải thi học thuộc lòng kiến thức!

🌿 **Góc nhìn chiến lược: ĐGNL chỉ là một trong nhiều cánh cửa:**
Kỳ thi ĐGNL sinh ra để mở thêm cơ hội trúng tuyển sớm cho bạn, chứ không phải cánh cửa duy nhất. Nếu kết quả thi ĐGNL chưa như ý, bạn vẫn còn kỳ thi Tốt nghiệp THPT và phương thức xét học bạ cơ mà!

🚀 **Chiến thuật làm bài ĐGNL không bị cháy giờ:**
1. **Quy tắc 3 lượt làm bài:** Lượt 1 làm ngay các câu nhận biết dưới 45 giây; Lượt 2 xử lý các câu tư duy trung bình; Lượt 3 dành cho các câu phân tích số liệu phức tạp.
2. **Tuyệt đối không mắc kẹt:** Nếu sau 2 phút vẫn chưa tìm ra hướng giải một câu, hãy đánh dấu lại và chuyển sang câu tiếp theo ngay lập tức.
3. Bấm vào **[Chiến thuật phân bổ thời gian ĐGNL]** để xem bảng mẹo khoanh trắc nghiệm khoa học nhé!`
    };
  }

  // 23. [TÌNH HUỐNG 23]: Bị xao nhãng bởi chuyện tình cảm tuổi học trò (Crush / Thất tình)
  if (lower.includes('nhớ crush') || lower.includes('thất tình') || lower.includes('nghĩ đến bạn đó') || lower.includes('thích một người') || lower.includes('crush') || lower.includes('yêu đương') || lower.includes('tương tư')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 23 • Tình Cảm Tuổi Học Trò',
      response: `**Những rung động, xao xuyến hay thậm chí là nỗi buồn thất tình của tuổi học trò là những cảm xúc vô cùng trong sáng và tự nhiên.** Trái tim tuổi 18 rất nhạy cảm, việc hình bóng một ai đó chiếm trọn tâm trí khiến bạn không thể tập trung giải toán là điều rất dễ hiểu.

🌿 **Chuyển hóa cảm xúc thành năng lượng bứt phá:**
Tình cảm đẹp nhất không phải là nắm tay nhau trốn học đi chơi, mà là nhìn về cùng một hướng. Món quà tỏ tình lớn nhất hay sự đáp lại xứng đáng nhất dành cho đối phương chính là hình ảnh một phiên bản xuất sắc, đỗ đạt của chính bạn!

🚀 **Nguyên tắc phân định rạch ròi:**
1. **Hẹn giờ nhớ nhung:** Hãy tự quy ước: Từ 19h đến 22h là thời gian dành trọn vẹn cho tương lai. Sau 22h bạn có thể dành 15 phút nghe một bản nhạc và nghĩ về bạn ấy.
2. **Cùng nhau đỗ Đại học:** Hãy biến tình cảm đó thành lời thách đố tích cực: *"Chúng mình cùng cố gắng để cùng nhau có mặt ở giảng đường Đại học nhé!"*
3. Tập trung giải xong đề thi hôm nay để chứng minh bản lĩnh và giá trị của chính bạn nào!`
    };
  }

  // 24. [TÌNH HUỐNG 24]: Bị ốm / Bệnh ngay mùa ôn thi quan trọng
  if (lower.includes('bị ốm') || lower.includes('đau đầu') || lower.includes('sốt') || lower.includes('đau dạ dày') || lower.includes('mệt mỏi thể xác') || lower.includes('ốm mùa thi') || lower.includes('bị bệnh') || lower.includes('bị sốt') || lower.includes('ốm rồi')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 24 • Ưu Tiên Sức Khỏe',
      response: `**SỨC KHỎE LÀ ƯU TIÊN SỐ 1 LÚC NÀY!** Không có một đề thi hay bài kiểm tra nào quan trọng hơn tính mạng và cơ thể của bạn cả. Khi cơ thể đang phát sốt, đau đầu hay đau dạ dày, hệ miễn dịch đang gào thét đòi hỏi năng lượng để chữa lành.

🌿 **Giải tỏa tâm lý sợ "mất kiến thức":**
Đừng hoảng sợ hay lo lắng việc nằm nghỉ vài ngày sẽ khiến bạn tụt lại phía sau. Kiến thức bạn đã tích lũy cả năm học đã được lưu sâu trong vỏ não, nó không thể biến mất chỉ sau 2-3 ngày bạn ốm đâu!

🚀 **Quy trình chăm sóc bản thân khi bị ốm:**
1. **Dẹp sách vở sang một bên:** Tạm thời gác lại mọi đề thi. Báo ngay với thầy cô quản nhiệm KTX hoặc gia đình để uống thuốc và được chăm sóc y tế.
2. **Nghỉ ngơi tuyệt đối:** Uống nhiều nước ấm, ăn cháo dinh dưỡng và ngủ đủ giấc để cơ thể hồi phục.
3. Khi nào hạ sốt và cơ thể khỏe khoắn trở lại, CHẠM sẽ cùng bạn sắp xếp lại lịch học bù sau, an tâm dưỡng bệnh nhé!`
    };
  }

  // 25. [TÌNH HUỐNG 25]: Cảm giác hẫng hụt / Lo sợ sự chia tay tuổi học trò (Cuối cấp)
  if (lower.includes('chia tay lớp') || lower.includes('sắp ra trường') || lower.includes('chia tay cấp 3') || lower.includes('không gặp lại bạn bè') || lower.includes('chia tay tuổi học trò') || lower.includes('ra trường') || lower.includes('cuối cấp') || lower.includes('kỷ yếu') || lower.includes('bế giảng')) {
    return {
      mode: 'sage',
      tag: 'Tình Huống 25 • Lưu Giữ Kỷ Niệm Cuối Cấp',
      response: `**Những ngày tháng cuối cùng của thời học sinh THPT luôn mang một hương vị cảm xúc rất đặc biệt: vừa vội vã chạy đua với thi cử, vừa bùi ngùi luyến tiếc từng khoảnh khắc bên mái trường và bạn bè.** Nhìn chiếc áo trắng đồng phục, tiếng ve kêu và những trang lưu bút KTX sắp khép lại rất dễ khiến ta rơi nước mắt.

🌿 **Ý nghĩa của sự trưởng thành:**
Chia tay không phải là kết thúc, chia tay là để mỗi người bước lên một chuyến tàu lớn hơn bay đến ước mơ của đời mình. Tình bạn đẹp đẽ ở mái trường nội trú Lào Cai sẽ luôn là hành trang ấm áp theo bạn suốt cuộc đời.

🚀 **Món quà chia tay ý nghĩa nhất:**
1. **Cùng nhau chạm tay vào ước mơ:** Món quà chia tay rực rỡ nhất không phải là những giọt nước mắt nuối tiếc, mà là nụ cười rạng rỡ của cả tập thể lớp khi tất cả cùng đỗ đạt vào ngôi trường mình mơ ước!
2. **Lưu giữ kỷ niệm:** Hãy chụp những bức ảnh giản dị nhất trong lớp học KTX, viết vài dòng chúc chân thành vào **Planner A5** gửi tặng bạn cùng bàn.
3. Hãy biến sự xúc động hôm nay thành động lực học tập kiên cường cho những tuần cuối cùng này nhé!`
    };
  }

  // 26. CÁC CÂU HỎI HỘI THOẠI ĐẶC THÙ (Tránh lặp câu)
  if (lower.includes('tiếp đi') || lower.includes('rồi sao') || lower.includes('sao nữa') || lower.includes('nói tiếp') || lower.includes('bước tiếp theo')) {
    return {
      mode: currentOperatingMode === 'orange' ? 'orange' : 'sage',
      tag: 'Bước Tiếp Theo Cùng CHẠM',
      response: `**Chúng mình sẽ cùng đi tiếp từng bước nhỏ thật vững chắc nhé:**

1. **Nếu bạn đang cảm thấy căng thẳng, quá tải:** Hãy bấm ngay nút **[Mở bài tập Thở 4-7-8]** bên dưới để hạ nhiệt nhịp tim và thư giãn não bộ trong 2 phút.
2. **Nếu bạn đang cần giải quyết bài vở:** Hãy bấm **[Bật hẹn giờ 5 phút]**, để điện thoại cách xa 2 mét và bắt đầu giải câu đầu tiên.
3. Hoặc bạn có thể gõ tên môn học bạn đang cần gỡ rối ngay bây giờ (Toán, Văn, Anh, Lý...), CHẠM sẽ cùng bạn chia nhỏ nó ra!`
    };
  }

  if (lower.includes('tại sao') || lower.includes('vì sao') || lower.includes('là sao') || lower.includes('lý do')) {
    return {
      mode: 'orange',
      tag: 'Góc Nhìn Khoa Học Nhận Thức',
      response: `**Dưới góc độ tâm lý học đường và khoa học thần kinh (GS. Carol Dweck & GS. Kristin Neff):**

* Khi đứng trước áp lực lớn hoặc bài toán khó, **hạch hạnh nhân (Amygdala)** trong não bộ sẽ bị kích hoạt phản ứng sợ hãi, sinh ra hormone Cortisol khiến ta có xu hướng muốn né tránh hoặc trì hoãn.
* Việc tự trách móc hay chửi rủa bản thân chỉ làm lượng Cortisol tăng cao hơn, khiến não bộ tê liệt.
* Ngược lại, **lòng tự trắc ẩn (Self-compassion) và việc chia nhỏ mục tiêu vi mô** sẽ giúp hệ thần kinh cảm thấy an toàn, kích thích não bộ tiết **Dopamine và Oxytocin** để phục hồi sự tập trung và hưng phấn học tập.

Bạn muốn thử một bài tập nhỏ để kích hoạt lại sự tập trung ngay lúc này không?`
    };
  }

  // 27. CHÀO HỎI & LÀM QUEN
  if (lower.includes('chào') || lower.includes('hello') || lower.includes('hi ') || lower === 'hi' || lower.includes('alo') || lower.includes('bạn là ai') || lower.includes('chạm là gì') || lower === 'ơi' || lower.includes('ơi') || lower.includes('bạn ơi')) {
    return {
      mode: 'sage',
      tag: 'Trợ Lý CHẠM • Xin Chào',
      response: `**Chào bạn! Mình là CHẠM** — Trợ lý Hỗ trợ Tâm lý Học đường và Rèn luyện Năng lực Tự điều chỉnh Học tập dành riêng cho bạn.

Mình ở đây để lắng nghe, đồng hành và gỡ rối cùng bạn 24/7 tuyệt đối không phán xét:
* 🌿 **Chế độ 1 (Xoa dịu cảm xúc):** Dành cho lúc bạn cảm thấy mệt mỏi, điểm kém, mất ngủ, áp lực gia đình hay tự ti so sánh.
* 🚀 **Chế độ 2 (Bứt phá tự học):** Dành cho lúc bạn cần chiến lược học tập, vượt qua trì hoãn, giải bài tập khó hay ôn thi nước rút.

Hôm nay bạn đang cảm thấy thế nào hoặc đang gặp khó khăn ở môn học nào? Hãy chia sẻ cùng mình nhé!`
    };
  }

  // 28. CẢM ƠN & TẠM BIỆT
  if (lower.includes('cảm ơn') || lower.includes('thank') || lower.includes('cám ơn') || lower.includes('tuyệt') || lower.includes('hay quá') || lower.includes('tạm biệt') || lower.includes('bye')) {
    return {
      mode: 'sage',
      tag: 'CHẠM Đồng Hành',
      response: `**Không có gì đâu bạn ơi!** Được đồng hành và lắng nghe bạn chính là niềm vinh hạnh lớn nhất của CHẠM.

🌿 Hãy luôn nhớ rằng: Bất cứ khi nào bạn cảm thấy mệt mỏi cần một điểm tựa an tâm, hay cần một chiến lược khoa học để bứt phá trong học tập, CHẠM luôn ở đây bên bạn 24/7.

Chúc bạn có một buổi tự học thật hiệu quả, tâm an trí vững và gặt hái kết quả xuất sắc nhé! 🚀`
    };
  }

  // 29. YÊU CẦU LỜI KHUYÊN / ĐỊNH HƯỚNG TỔNG QUÁT
  if (lower.includes('khuyên') || lower.includes('lời khuyên') || lower.includes('tư vấn') || lower.includes('làm gì') || lower.includes('giúp tôi') || lower.includes('bế tắc') || lower.includes('gỡ rối')) {
    return {
      mode: 'sage',
      tag: 'Tư Vấn & Định Hướng Đồng Hành',
      response: `**CHẠM luôn ở ngay đây để làm điểm tựa và đồng hành gỡ rối cùng bạn.** Khi tâm trí đang ngổn ngang hoặc chưa biết bắt đầu từ đâu, việc bạn chủ động mở lời tìm kiếm sự hỗ trợ đã là một bước tiến rất dũng cảm của **Tự trắc ẩn (Self-compassion)**.

🌿 **Góc xoa dịu & Khai phóng nhận thức:**
* Bạn không cần phải giải quyết mọi vấn đề cùng một lúc. Mọi sự hoang mang đều bắt nguồn từ việc não bộ phải xử lý quá nhiều thông tin và kỳ vọng.
* Hãy cho phép bản thân chậm lại một nhịp, hít thở thật sâu. Chúng mình sẽ chia nhỏ mọi khó khăn thành từng việc vi mô có thể kiểm soát được.

🚀 **3 Bước hành động ngay lúc này:**
1. **Bước 1 (Hạ nhiệt tâm trí):** Nếu đầu óc đang căng như dây đàn, hãy bấm nút **[Mở bài tập Thở 4-7-8]** bên dưới để đưa nhịp tim và hệ thần kinh về trạng thái an tĩnh.
2. **Bước 2 (Gọi tên nút thắt):** Bạn đang cảm thấy nặng lòng nhất vì điều gì? Điểm số thi thử, bài tập quá tải, sự so sánh của gia đình, hay cảm giác mệt mỏi ở KTX?
3. **Bước 3 (Chọn công cụ):** Mở thanh bên trái và chọn **14 Nan Thẻ Quạt "Chạm để Bứt phá"** (Nan 01 - Nan 07 để xoa dịu, Nan 08 - Nan 14 để bứt phá tự học) để nhận ngay chiến lược cụ thể nhé!`
    };
  }

  // 30. PHẢN HỒI LUÂN PHIÊN THÔNG MINH NẾU KHÔNG KHỚP TỪ KHÓA
  const defaultResponses = [
    {
      mode: currentOperatingMode === 'orange' ? 'orange' : 'sage',
      tag: currentOperatingMode === 'orange' ? 'Chiến Lược Tự Điều Chỉnh' : 'Xoa Dịu & Lắng Nghe',
      response: `**Mình đang lắng nghe bạn đây.** Những áp lực và tâm sự trong học tập đôi khi rất khó để giãi bày cùng ai.

🌿 **Điểm tựa an tâm:** Bất kể bạn đang gặp khó khăn gì, hãy nhớ rằng bạn hoàn toàn không đơn độc trên hành trình này. CHẠM luôn ở đây đồng hành cùng bạn 24/7 tuyệt đối không phán xét.

🚀 **Bạn có thể chia sẻ cụ thể hơn cho mình nghe được không?**
* Bạn đang cảm thấy căng thẳng ở môn học nào (Toán, Văn, Anh, Lý, Hóa...)?
* Hay đang có điều gì về bạn bè, KTX, gia đình hoặc sức khỏe khiến bạn phiền lòng?
Mình sẽ cùng bạn phân tích và gỡ rối từng nút thắt một cách khoa học nhất nhé!`
    },
    {
      mode: 'orange',
      tag: 'Kích Hoạt Năng Lượng SRL',
      response: `**Mỗi khó khăn trong học tập chính là cơ hội quý giá để não bộ rèn luyện Tư duy phát triển (Growth Mindset - GS. Carol Dweck).**

🌿 **Khoa học nhận thức:** Khi bạn cảm thấy bế tắc, đó là tín hiệu tự nhiên cho thấy não bộ đang hình thành các liên kết nơ-ron mới. Đừng nản lòng, chỉ cần đổi cách tiếp cận là mọi thứ sẽ thông suốt!

🚀 **Gợi ý khởi động tức thì:**
1. Mở **14 Nan Thẻ Quạt** ở thanh bên trái để chọn ngay một công cụ bỏ túi.
2. Bấm nút **[Bật hẹn giờ 5 phút]** bên dưới để kích hoạt quy tắc 5 phút phá tan sức ỳ trì hoãn.
3. Hoặc chia sẻ cho mình bài tập cụ thể bạn đang vướng mắc để chúng mình cùng xử lý nhé!`
    },
    {
      mode: 'sage',
      tag: 'Điểm Tựa An Yên',
      response: `**Mình hiểu và luôn ở đây đồng hành cùng bạn.** Bạn đã nỗ lực rất nhiều suốt thời gian qua rồi, không cần phải tự gánh vác mọi áp lực một mình đâu.

🌿 **Chăm sóc bản thân:** Lắng nghe cảm xúc của chính mình là bước đầu tiên để tái tạo năng lượng (Thuyết Tự trắc ẩn Kristin Neff).

🚀 **Bây giờ bạn muốn chúng mình cùng làm gì trước?**
* Bấm **[Mở bài tập Thở 4-7-8]** để xoa dịu nhịp tim và thư giãn đầu óc trong 2 phút.
* Hay cùng **Mở Sổ Nhật Ký Tự Trắc Ẩn** để viết ra những suy nghĩ ngổn ngang hôm nay?`
    }
  ];

  const randomIndex = Math.floor(Math.random() * defaultResponses.length);
  return defaultResponses[randomIndex];
};

// 4. CƠ SỞ DỮ LIỆU TÌM KIẾM NHANH (QUICK SEARCH DATABASE) TOÀN DIỆN
window.CHAM_SEARCH_DATABASE = [
  // --- 14 NAN THẺ QUẠT BỎ TÚI ---
  {
    type: 'fan',
    fanId: 1,
    tag: 'Nan 01 • Xanh Sage',
    title: 'Bìa CHẠM: Điểm Tựa Thấu Cảm',
    snippet: 'Chạm để bứt phá - Tâm an trí vững, điểm tựa thấu cảm học đường Lào Cai.',
    keywords: 'bia cham diem tua thau cam tam an tri vung 01 nan 1'
  },
  {
    type: 'fan',
    fanId: 2,
    tag: 'Nan 02 • Xanh Sage',
    title: 'Khi bị điểm kém / thi không như ý',
    snippet: '3 bước tự tha thứ: Chánh niệm, Tính đồng loại và Lòng tự trắc ẩn.',
    keywords: 'diem kem thi truot diem thap that vong sua bai sai tu tha thu 02 nan 2'
  },
  {
    type: 'fan',
    fanId: 3,
    tag: 'Nan 03 • Xanh Sage',
    title: 'Khi quá tải bài vở ở trường KTX',
    snippet: 'Kỹ thuật Thở 4-7-8 giúp hạ nhiệt nhịp tim và giải tỏa cortisol căng thẳng.',
    keywords: 'qua tai bai vo ktx ngop met ap luc tho 4-7-8 ha nhiet 03 nan 3'
  },
  {
    type: 'fan',
    fanId: 4,
    tag: 'Nan 04 • Xanh Sage',
    title: 'Khi tự ti, so sánh với bạn bè',
    snippet: 'Quy tắc tiến bộ 1% mỗi ngày - Mỗi bông hoa nở vào một mùa riêng.',
    keywords: 'tu ti so sanh ban be con nha nguoi ta peer pressure kem coi tien bo 1% 04 nan 4'
  },
  {
    type: 'fan',
    fanId: 5,
    tag: 'Nan 05 • Xanh Sage',
    title: 'Khi mất ngủ, trằn trọc lo âu ban đêm',
    snippet: 'Kỹ thuật quét cơ thể (Body Scan 2 phút) và bài tập xả lo lắng Brain Dump.',
    keywords: 'mat ngu tran troc lo au dem trang dem body scan quet co the ngu ngon 05 nan 5'
  },
  {
    type: 'fan',
    fanId: 6,
    tag: 'Nan 06 • Xanh Sage',
    title: 'Khi dằn vặt vì một sai lầm / Tự trách',
    snippet: 'Bức thư gửi chính mình từ người bạn thân nhất (Tự trắc ẩn Kristin Neff).',
    keywords: 'dan vat sai lam tu trach minh an han hoi han buc thu gui chinh minh 06 nan 6'
  },
  {
    type: 'fan',
    fanId: 7,
    tag: 'Nan 07 • Xanh Sage',
    title: 'Thước đo năng lượng học tập',
    snippet: 'Nhận diện vạch pin tinh thần: Vạch Xanh, Vạch Vàng và Vạch Đỏ khẩn cấp.',
    keywords: 'thuoc do nang luong het pin kiet suc vach do sac pin phuc hoi 07 nan 7'
  },
  {
    type: 'fan',
    fanId: 8,
    tag: 'Nan 08 • Cam Đào',
    title: 'Bìa Bứt Phá: Tự Điều Chỉnh Học Tập (SRL)',
    snippet: 'Khai mở 3 pha tự học Barry Zimmerman: Lập kế hoạch - Giám sát - Tự đánh giá.',
    keywords: 'but pha tu dieu chinh hoc tap srl zimmerman lap ke hoach 08 nan 8'
  },
  {
    type: 'fan',
    fanId: 9,
    tag: 'Nan 09 • Cam Đào',
    title: 'Khi gặp bài tập quá khó / Bế tắc',
    snippet: 'Phương pháp phân rã bài toán vi mô & Kỹ thuật đọc đảo ngược SQ3R.',
    keywords: 'bai kho be tac toan ly hoa kho khong hieu phan ra vi mo sq3r 09 nan 9'
  },
  {
    type: 'fan',
    fanId: 10,
    tag: 'Nan 10 • Cam Đào',
    title: 'Kỹ thuật Feynman 2 phút: Học sâu nhớ lâu',
    snippet: 'Giảng lại bài học cho một đứa trẻ 10 tuổi hiểu để phát hiện lỗ hổng kiến thức.',
    keywords: 'feynman 2 phut hoc sau nho lau chu dong active recall quen bai 10 nan 10'
  },
  {
    type: 'fan',
    fanId: 11,
    tag: 'Nan 11 • Cam Đào',
    title: 'Quy tắc 5 Phút & Pomodoro: Đánh bay trì hoãn',
    snippet: 'Vượt qua sức ỳ với 5 phút đầu tiên - Chia nhỏ phiên học 25 phút tập trung.',
    keywords: 'quy tac 5 phut pomodoro tri hoan luoi suc y tap trung 11 nan 11'
  },
  {
    type: 'fan',
    fanId: 12,
    tag: 'Nan 12 • Cam Đào',
    title: 'Cách hỏi bài thầy cô và bạn bè hiệu quả',
    snippet: 'Công thức 3 bước: Em đã làm đến đây, em vướng chỗ này, nhờ thầy cô chỉ dẫn.',
    keywords: 'hoi bai thay co ban be ngai hoi so hoi cong thuc 3 buoc 12 nan 12'
  },
  {
    type: 'fan',
    fanId: 13,
    tag: 'Nan 13 • Cam Đào',
    title: 'Chống xao nhãng điện thoại / Mạng xã hội',
    snippet: 'Kỹ thuật Hộp Cách Ly 2 mét & Tờ giấy trắng "Chờ xử lý" khi học bài.',
    keywords: 'dien thoai mang xa hoi xao nhang luot tiktok facebook game nghien 13 nan 13'
  },
  {
    type: 'fan',
    fanId: 14,
    tag: 'Nan 14 • Cam Đào',
    title: 'Sức mạnh của từ "CHƯA" (Growth Mindset)',
    snippet: 'Thay vì "mình dốt", hãy nói "mình CHƯA làm được ở thời điểm hiện tại".',
    keywords: 'tu duy phat trien growth mindset tu chua carol dweck no-ron thong minh 14 nan 14'
  },

  // --- 25 TÌNH HUỐNG TÂM LÝ & TỰ HỌC NGUỒN CỦA LÀO CAI ---
  {
    type: 'scenario',
    id: 1,
    tag: 'Tình Huống 1 • Điểm Số',
    title: 'Điểm kém bài thi thử / kiểm tra giữa kỳ',
    snippet: 'Cách xoa dịu nỗi buồn, không tự trách và 3 bước khoanh vùng chữa bài sai.',
    prompt: 'Mình vừa bị điểm kém bài kiểm tra, cảm thấy rất hụt hẫng và thất vọng về bản thân...',
    keywords: 'diem kem thi thu thi giua ky diem 1 2 3 4 5 rot mon rot hoc sinh'
  },
  {
    type: 'scenario',
    id: 2,
    tag: 'Tình Huống 2 • Gia Đình',
    title: 'Bị bố mẹ so sánh với "con nhà người ta"',
    snippet: 'Vượt qua nỗi tủi thân khi bị so sánh, định vị mốc thời gian phát triển riêng.',
    prompt: 'Bố mẹ cứ so sánh mình với con nhà người ta khiến mình rất tủi thân và áp lực...',
    keywords: 'con nha nguoi ta so sanh bo me chê trach gia dinh ky vong'
  },
  {
    type: 'scenario',
    id: 3,
    tag: 'Tình Huống 3 • Trì Hoãn',
    title: 'Quá tải bài tập & Trì hoãn học đêm',
    snippet: 'Hiện tượng não đóng băng vì ngợp bài vở và kỹ thuật 2 phút mở vở bắt đầu.',
    prompt: 'Bài tập nhiều quá làm mình bị ngợp, cứ chần chừ trì hoãn không muốn làm gì cả...',
    keywords: 'qua tai bai tap tri hoan luoi hoc ngop bai dong bang hanh dong'
  },
  {
    type: 'scenario',
    id: 4,
    tag: 'Tình Huống 4 • Phương Hướng',
    title: 'Mất gốc kiến thức / Mất phương hướng',
    snippet: 'Chiến thuật chọn 1 chủ đề cốt lõi nhất và chia nhỏ 30 phút để vá gốc.',
    prompt: 'Mình cảm thấy bị mất gốc kiến thức và không biết phải bắt đầu học lại từ đâu...',
    keywords: 'mat goc mat phuong huong khong biet bat dau tu dau hoang mang'
  },
  {
    type: 'scenario',
    id: 5,
    tag: 'Tình Huống 5 • Kiệt Sức',
    title: 'Thiếu ngủ, kiệt sức, muốn buông xuôi',
    snippet: 'Quy trình hồi phục năng lượng khẩn cấp: Gập sách, uống nước ấm và ngủ sớm.',
    prompt: 'Dạo này mình kiệt sức và thiếu ngủ trầm trọng, nhiều lúc chỉ muốn buông xuôi...',
    keywords: 'thieu ngu kiet suc buon ngu muon bo cuoc nan long burnout sap nguon'
  },
  {
    type: 'scenario',
    id: 6,
    tag: 'Tình Huống 6 • Áp Lực Bạn Bè',
    title: 'Áp lực đồng lứa (Peer pressure)',
    snippet: 'Thấy bạn bè học ngày đêm khiến mình lo sợ - Giữ vững làn chạy marathon riêng.',
    prompt: 'Nhìn các bạn xung quanh học ngày học đêm làm mình thấy bất an và tụt hậu quá...',
    keywords: 'peer pressure ap luc dong lua ban be hoc ngay dem chay dua tut hau'
  },
  {
    type: 'scenario',
    id: 7,
    tag: 'Tình Huống 7 • Thi Cử',
    title: 'Sợ thi trượt Nguyện vọng 1 (NV1)',
    snippet: 'Đại học là một con đường, không phải duy nhất; tập trung giải quyết mục tiêu hôm nay.',
    prompt: 'Mình rất sợ thi trượt nguyện vọng 1, tương lai mờ mịt không biết đi về đâu...',
    keywords: 'so thi truot nv1 nguyen vong 1 truot dai hoc tuong lai mo mit'
  },
  {
    type: 'scenario',
    id: 8,
    tag: 'Tình Huống 8 • Tập Trung',
    title: 'Nghiện điện thoại, TikTok, lướt mạng xã hội',
    snippet: 'Giải mã cơ chế dopamine của app và chiến lược hộp cách ly 2 mét.',
    prompt: 'Mình cứ bị dán mắt vào điện thoại lướt mạng xã hội hàng giờ mà không dứt ra học được...',
    keywords: 'nghien dien thoai tiktok facebook instagram game luot mang mat tap trung'
  },
  {
    type: 'scenario',
    id: 9,
    tag: 'Tình Huống 9 • Ghi Nhớ',
    title: 'Học trước quên sau / Não cá vàng',
    snippet: 'Áp dụng đường cong quên Ebbinghaus và phương pháp lặp lại ngắt quãng.',
    prompt: 'Mình học trước quên sau, vừa học tối hôm trước sáng hôm sau đã quên sạch...',
    keywords: 'hoc truoc quen sau nao ca vang quen cong thuc active recall ebbinghaus'
  },
  {
    type: 'scenario',
    id: 10,
    tag: 'Tình Huống 10 • Quan Hệ Bạn Bè',
    title: 'Xung đột, cãi nhau với bạn bè / người yêu mùa thi',
    snippet: 'Kỹ thuật cất cảm xúc vào chiếc hộp tạm thời để tập trung cho kỳ thi quan trọng.',
    prompt: 'Mình vừa cãi nhau với bạn thân/người yêu, tâm trạng rối bời không học nổi...',
    keywords: 'xung dot cai nhau gian nhau ban be nguoi yeu chia tay roi boi'
  },
  {
    type: 'scenario',
    id: 11,
    tag: 'Tình Huống 11 • Môn Học',
    title: 'Học thuộc môn Xã hội khô khan (Sử, Địa, GDCD)',
    snippet: 'Chuyển văn bản dài thành sơ đồ tư duy 4 Keywords và liên kết câu chuyện.',
    prompt: 'Làm sao để học thuộc các môn chữ dài như Lịch sử, Địa lý, GDCD mà không bị buồn ngủ?',
    keywords: 'hoc thuoc su dia gdcd van xa hoi chu dai kho khan so do tu duy'
  },
  {
    type: 'scenario',
    id: 12,
    tag: 'Tình Huống 12 • Phòng Thi',
    title: 'Áp lực hoảng loạn trước giờ vào phòng thi',
    snippet: 'Bài tập tiếp đất Grounding 5-4-3-2-1 và nhịp thở hạ nhiệt 4-4-6.',
    prompt: 'Trước khi vào phòng thi tim mình đập thình thịch, tay chân run rẩy và đầu óc trống rỗng...',
    keywords: 'hoang loan phong thi run so tim dap nhanh run tay chong mat'
  },
  {
    type: 'scenario',
    id: 13,
    tag: 'Tình Huống 13 • Định Hướng',
    title: 'Phân vân chọn Ngành nghề vs Nguyện vọng Gia đình',
    snippet: 'Dùng ma trận SWOT đối thoại ôn hòa, cân bằng đam mê và kỳ vọng của bố mẹ.',
    prompt: 'Bố mẹ muốn mình học ngành kinh tế nhưng mình lại thích công nghệ/nghệ thuật...',
    keywords: 'chon nganh chon nghe dai hoc nguyen vong bo me gia dinh ep'
  },
  {
    type: 'scenario',
    id: 14,
    tag: 'Tình Huống 14 • KTX Nội Trú',
    title: 'Cô đơn, nhớ nhà ở Ký túc xá Nội trú',
    snippet: 'Góc thấu cảm dành riêng cho học sinh KTX trường PTDTNT THPT Lào Cai.',
    prompt: 'Ở ký túc xá xa nhà nhiều lúc mình thấy cô đơn, nhớ gia đình và tủi thân vô cùng...',
    keywords: 'ktx ky tuc xa nho nha co don noi tru laocai xa que'
  },
  {
    type: 'scenario',
    id: 15,
    tag: 'Tình Huống 15 • SOS',
    title: 'Cần hỗ trợ tâm lý khẩn cấp (Hotline 111)',
    snippet: 'Sơ cứu tâm lý khủng hoảng (PFA), đường dây nóng 111 và 1900 599 930 miễn phí 24/7.',
    prompt: 'Mình cảm thấy quá bế tắc và không muốn tiếp tục nữa, mình cần một người lắng nghe...',
    keywords: 'sos khan cap tu hai be tac bien mat khong muon song hotline 111'
  },
  {
    type: 'scenario',
    id: 16,
    tag: 'Tình Huống 16 • Điểm Liệt',
    title: 'Học lệch môn / Nguy cơ dính điểm liệt',
    snippet: 'Chiến thuật chạm mốc an toàn Safety (từ 3 điểm lên 5-6 điểm) cho môn yếu.',
    prompt: 'Mình học lệch quá nhiều và rất sợ dính điểm liệt môn tiếng Anh/Toán...',
    keywords: 'hoc lech diem liet tieng anh toan nguy co truot tot nghiep'
  },
  {
    type: 'scenario',
    id: 17,
    tag: 'Tình Huống 17 • Hoàn Hảo Hóa',
    title: 'Áp lực chủ nghĩa hoàn hảo / Tự dằn vặt',
    snippet: 'Cho phép bản thân có 1-2 lỗi sai để học hỏi, chuyển hóa thành sự tiến bộ lành mạnh.',
    prompt: 'Mình luôn bị ám ảnh bởi sự hoàn hảo, chỉ cần làm sai một câu là mình dằn vặt cả ngày...',
    keywords: 'chu nghia hoan hao qua khat khe dan vat ban than tu trach'
  },
  {
    type: 'scenario',
    id: 18,
    tag: 'Tình Huống 18 • Khối Thi',
    title: 'Phân vân chọn Khối thi (A00, B00, C00, D01...)',
    snippet: 'Ma trận chọn làn xe chạy nhanh nhất theo năng lực thực tế và điểm số.',
    prompt: 'Mình đang phân vân không biết nên chọn thi khối A hay khối D để có cơ hội đỗ cao nhất...',
    keywords: 'chon khoi thi khoi a khoi b khoi c khoi d to hop xet tuyen'
  },
  {
    type: 'scenario',
    id: 19,
    tag: 'Tình Huống 19 • Học Phí',
    title: 'Áp lực học phí & Hoàn cảnh kinh tế gia đình',
    snippet: 'Thông tin quỹ học bổng, tín dụng sinh viên 0% và lộ trình săn học bổng giảm gánh nặng.',
    prompt: 'Mình lo lên Đại học học phí đắt đỏ bố mẹ ở quê không gánh nổi...',
    keywords: 'hoc phi kinh te gia dinh kho khan hoc bong vay von sinh vien'
  },
  {
    type: 'scenario',
    id: 20,
    tag: 'Tình Huống 20 • Giấc Ngủ',
    title: 'Mất ngủ triền miên / Đầu óc căng thẳng ban đêm',
    snippet: 'Cách ngắt kết nối trước khi ngủ, bài tập thở và âm thanh thư giãn não bộ.',
    prompt: 'Đêm nào mình cũng trằn trọc đến 2-3 giờ sáng không ngủ được vì suy nghĩ miên man...',
    keywords: 'mat ngu trien mien tran troc dem khuya kho ngu dau oc cang thang'
  },
  {
    type: 'scenario',
    id: 21,
    tag: 'Tình Huống 21 • Nước Rút',
    title: 'Kiệt sức giai đoạn nước rút 30 ngày trước thi',
    snippet: 'Chiến thuật giữ nhịp: Ưu tiên chất lượng ôn tập hơn số lượng giờ thức đêm.',
    prompt: 'Còn 1 tháng nữa là thi mà mình thấy đuối sức quá, cảm giác kiến thức rơi rụng hết...',
    keywords: 'nuoc rut 30 ngay truoc thi kiet suc duoi suc giai doan cuoi'
  },
  {
    type: 'scenario',
    id: 22,
    tag: 'Tình Huống 22 • ĐGNL / ĐGTD',
    title: 'Áp lực kỳ thi Đánh Giá Năng Lực / Tư Duy',
    snippet: 'Chiến thuật làm bài 3 lượt và quản lý thời gian thi trắc nghiệm tốc độ cao.',
    prompt: 'Mình chuẩn bị thi Đánh giá năng lực ĐHQG mà thấy đề dài quá làm không kịp thời gian...',
    keywords: 'danh gia nang luc dgnl dgtd dai hoc quoc gia bach khoa de thi dai'
  },
  {
    type: 'scenario',
    id: 23,
    tag: 'Tình Huống 23 • Tình Cảm',
    title: 'Xao nhãng vì Crush / Chuyện tình cảm học trò',
    snippet: 'Chuyển hóa tình cảm tuổi học trò thành động lực tích cực: Cùng nhau đỗ Đại học!',
    prompt: 'Dạo này mình hay tương tư crush, ngồi học cứ nghĩ về người ta mà không tập trung được...',
    keywords: 'crush tinh cam nguoi yeu thich mot nguoi tuong tu xao nhang'
  },
  {
    type: 'scenario',
    id: 24,
    tag: 'Tình Huống 24 • Sức Khỏe',
    title: 'Bị ốm, sốt ngay trước ngày thi quan trọng',
    snippet: 'Quy tắc ưu tiên sức khỏe số 1: Nghỉ ngơi trọn vẹn để cơ thể hồi phục.',
    prompt: 'Sắp thi đến nơi rồi mà mình lại bị ốm sốt, mình lo lắng kiến thức sẽ bị quên hết...',
    keywords: 'bi om sot dau dau cam cum ngay thi quen kien thuc'
  },
  {
    type: 'scenario',
    id: 25,
    tag: 'Tình Huống 25 • Cuối Cấp',
    title: 'Hẫng hụt, sợ chia tay tuổi học trò lớp 12',
    snippet: 'Biến cảm xúc luyến tiếc thành động lực phấn đấu để cả lớp cùng đỗ đạt ước mơ.',
    prompt: 'Năm cuối cấp sắp chia tay thầy cô bạn bè mình thấy hụt hẫng và xúc động quá...',
    keywords: 'chia tay cuoi cap lop 12 chia tay thay co ban be luu but planner a5'
  }
];

