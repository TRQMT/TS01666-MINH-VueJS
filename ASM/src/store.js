// src/store.js
import { reactive } from 'vue'

// Hàm helper để lấy đường dẫn ảnh từ thư mục assets/images
const getImageUrl = (imageName) => {
  try {
    return new URL(`./assets/images/${imageName}`, import.meta.url).href
  } catch (error) {
    return 'https://via.placeholder.com/300x200?text=No+Image'
  }
}

export const store = reactive({
  // Dữ liệu người dùng
  users: [
    { 
      email: 'admin@gmail.com', 
      password: '123', 
      name: 'Admin User', 
      avatar: getImageUrl('avatar1.png') // Đảm bảo bạn có file avatar1.png
    }
  ],
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,

  // Dữ liệu 6 bài báo về AI (Mock Data)
  posts: [
    { 
      id: 1, 
      title: 'AI vượt mức sáng tạo trung bình của con người?', 
      content: 'Nghiên cứu mới nhất trên 100.000 người cho thấy AI đã thắng được số đông trong các bài kiểm tra tư duy. Đặc biệt là phiên bản GPT-5, đã đạt điểm số cao hơn mức trung bình của con người một cách rõ rệt trong các tác vụ lên ý tưởng marketing và viết lách.', 
      author: 'Minh Khôi', 
      date: '06/02/2026', 
      image: getImageUrl('ai-creative.jpg') 
    },
    { 
      id: 2, 
      title: 'Cảnh báo lừa đảo Deepfake: Gọi video thấy mặt vẫn mất tiền', 
      content: 'Công an TP.HCM cảnh báo thủ đoạn lừa đảo mới sử dụng AI Deepfake để giả mạo khuôn mặt và giọng nói người thân gọi video call mượn tiền. Các chuyên gia khuyến cáo người dân cần gọi điện thoại xác thực trực tiếp khi nhận được yêu cầu chuyển khoản lạ.', 
      author: 'Tuổi Trẻ Online', 
      date: '05/02/2026', 
      image: getImageUrl('ai-fraud.jpg') 
    },
    { 
      id: 3, 
      title: 'Bác sĩ AI: Chẩn đoán ung thư sớm chỉ trong vài giây', 
      content: 'Hệ thống AI mới được áp dụng tại các bệnh viện lớn giúp tầm soát ung thư phổi và gan với độ chính xác lên tới 98%. Công nghệ này hỗ trợ các bác sĩ giảm tải áp lực và đưa ra phác đồ điều trị nhanh chóng hơn cho bệnh nhân.', 
      author: 'Sức Khỏe Đời Sống', 
      date: '04/02/2026', 
      image: getImageUrl('ai-doctor.jpg') 
    },
    { 
      id: 4, 
      title: 'Học sinh Việt Nam dùng AI luyện tiếng Anh: Cơ hội và thách thức', 
      content: 'Trào lưu sử dụng ChatGPT và Gemini để luyện nói tiếng Anh đang bùng nổ trong giới học sinh, sinh viên. Tuy nhiên, các chuyên gia giáo dục cảnh báo việc phụ thuộc quá nhiều vào AI có thể làm giảm khả năng tư duy phản biện và giao tiếp thực tế.', 
      author: 'Giáo Dục 24h', 
      date: '03/02/2026', 
      image: getImageUrl('ai-education.jpg') 
    },
    { 
      id: 5, 
      title: 'Họp báo vụ bắt giữ 2 nghi phạm cướp ngân hàng tại Gia Lai', 
      content: 'Công an tỉnh Gia Lai vừa tổ chức họp báo về vụ bắt giữ 2 nghi phạm cướp ngân hàng tại TP.Pleiku. Hai đối tượng đã bị bắt giữ sau khi thực hiện vụ cướp tiền mặt tại một chi nhánh ngân hàng.', 
      author: 'Báo Gia Lai', 
      date: '02/02/2026', 
      image: getImageUrl('hop-bao-gia-lai-2-1770347157792400851976.webp') 
    },
    { 
      id: 6, 
      title: 'Hãng thưởng cao, tài xế xe công nghệ vẫn chưa ưng vì "chạy Tết áp lực quá"', 
      content: 'Dù các nền tảng gọi xe công nghệ đồng loạt tung ra nhiều gói thưởng lớn, lì xì tiền mặt và chương trình hỗ trợ thu nhập cho tài xế dịp Tết Bính Ngọ 2026, tình trạng người dùng khó gọi xe tại các đô thị lớn vẫn tái diễn.Tuy các ứng dụng không công bố số lượng tài xế hoạt động hay tỉ lệ tài xế tắt app dịp Tết, nhưng việc khách phải chờ xe lâu hơn cho thấy nhu cầu tăng mạnh trong khi khả năng đáp ứng chưa đạt mức như ngày thường.', 
      author: 'Xe công nghệ', 
      date: '03/02/2026', 
      image: getImageUrl('xe-cong-nghe-tet.jpg') 
    },
    { 
      id: 7, 
      title: 'Trí tuệ của sự tò mò', 
      content: 'Cuộc sống, khi được nhìn nhận như phòng thí nghiệm vĩ đại, trở nên phong phú với vô số khả thể. Mỗi tương tác là cơ hội hiểu sâu hơn về bản thân và người khác.',
      author: 'Khám phá', 
      date: '06/02/2026', 
      image: getImageUrl('so-bi-phat-17473585357282102038389-17703460944781979981101.webp') 
    }
    
  ],

  // --- Các hàm xử lý (Actions) giữ nguyên ---
  login(email, password) {
    const user = this.users.find(u => u.email === email && u.password === password)
    if (user) {
      this.currentUser = user
      localStorage.setItem('currentUser', JSON.stringify(user))
      return true
    }
    return false
  },

  register(user) {
    if (!user.avatar) {
      // Ảnh mặc định cho user mới đăng ký
      user.avatar = getImageUrl('user-default.png') 
    }
    this.users.push(user)
    return true
  },

  logout() {
    this.currentUser = null
    localStorage.removeItem('currentUser')
  },

  addPost(post) {
    if (!post.image) {
       post.image = 'https://via.placeholder.com/600x300?text=News'
    }
    this.posts.unshift(post)
  },
  
  updateUser(updatedInfo) {
    this.currentUser = { ...this.currentUser, ...updatedInfo }
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    const index = this.users.findIndex(u => u.email === this.currentUser.email)
    if(index !== -1) this.users[index] = this.currentUser
  }
})
