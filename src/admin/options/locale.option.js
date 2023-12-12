const locale = {
  language: "vi",
  translations: {
    labels: {
      User: "Tài khoản điều hành",
      Policy: "Chính Sách",
      Route: "Tuyến",
      Office: "Văn Phòng",
      BusBrand: "Nhà Xe",
      VihicleTransport: "Phương Tiện",

    },
    resources: {
      // User: {
      //   properties: {
      //     account: "Tên đăng nhập",
      //     _name: "Họ Và Tên",
      //     _phone: "Số điện thoại",

      //     password: "Mật khẩu",
      //     role: "Quyền người dùng",
      //     isEmailVerified: "Tình trạng xác thực",
      //     updatedAt: "Ngày cập nhật",
      //     createdAt: "Ngày tạo",
      //   },
      // },
      User: {
        properties: {
          _name: "Tên nhà xe",
          _phone: "Hotline",
          password: "Mật khẩu",
          role: "Quyền người dùng",
          isEmailVerified: "Tình trạng xác thực",
          updatedAt: "Ngày cập nhật",
          createdAt: "Ngày tạo",
        },
      },
      Policy: {
        properties: {
          name: "Tên chính sách",
          content: "Nội Dung",
          busBrand: "Nhà xe",
          updatedAt: "Ngày cập nhật",
          createdAt: "Ngày tạo",
        },
      },
      Route: {
        properties: {
          busBrand: "Nhà xe",
          startingPoint: "Điểm đầu",
          endingPoint: "Điểm cuối",
          mainSchedule: "Lịch trình chính",
          subSchedule: "Lịch trình phụ",
          pickupPointList: "Danh sách điểm dừng",
          "pickupPointList.pickupPoint": "Điểm dừng",
          "pickupPointList.price": "Giá vé",
          updatedAt: "Ngày cập nhật",
          createdAt: "Ngày tạo",
        },
      },
      Office: {
        properties: {
          busBrand: "Nhà Xe",
          name: "Tên văn phòng",
          address: "Địa chỉ",
          provinceOrCity: "Tỉnh/Thành Phố",
          district: "Quận/Huyện",
          images: "Ảnh văn phòng",
          phone: "Số điện thoại",
          location: "Vị trí trên bản đồ(Nhập toạ độ)",
          updatedAt: "Ngày cập nhật",
          createdAt: "Ngày tạo",
        },
      },
      BusBrand: {
        properties: {
          name: "Tên nhà xe",
          account: "Tài khoản",
          phone: "Số điện thoại",
          isActive: "Đã kích hoạt",
          updatedAt: "Ngày cập nhật",
          createdAt: "Ngày tạo",
        },
      },
      VihicleTransport: {
        properties: {
          busBrand: "Nhà xe",
          name: "Tên phương tiện",
          images: "Ảnh xe",
          idBus: "Biển số",
          updatedAt: "Ngày cập nhật",
          createdAt: "Ngày tạo",
        },
      },
    },
  },
};

module.exports = locale;
