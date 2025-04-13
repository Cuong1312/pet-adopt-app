import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const { user } = useUser(); // Lấy thông tin người dùng từ Clerk

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center', // Đảm bảo nội dung căn giữa màn hình
        alignItems: 'center', // Căn giữa theo chiều ngang
      }}
    >
      {user ? (
        // Nếu người dùng đã đăng nhập, điều hướng đến trang home
        <Redirect href={'/(tabs)/home'} />
      ) : (
        // Nếu chưa đăng nhập, điều hướng đến trang login
        <Redirect href={'/login'} />
      )}
    </View>
  );
}
