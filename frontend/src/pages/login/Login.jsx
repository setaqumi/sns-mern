import "./Login.css";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Text,
  Container,
  Group,
  Button,
  Title,
} from "@mantine/core";

export const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MERN</h3>
          <span className="logoDescription">Real SNS</span>
        </div>
        <div className="loginRight">
          <Container size="xl" mx={30}>
            <Title
              align="center"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 700,
              })}
            >
              ログイン
            </Title>
            <Paper withBorder shadow="md" p={40} mt={50} radius="md">
              <TextInput
                label="Eメールアドレス"
                placeholder="you@mantine.dev"
                required
              />
              <PasswordInput
                label="パスワード"
                placeholder="Your password"
                required
                mt="md"
              />
              <Group position="apart" mt="md">
                <Checkbox label="ログイン情報を保存する" />
                <Anchor
                  onClick={(event) => event.preventDefault()}
                  href="#"
                  size="sm"
                >
                  パスワードを忘れましたか？
                </Anchor>
              </Group>
              <Button fullWidth mt="xl">
                サインイン
              </Button>
            </Paper>
            <Text color="dimmed" size="sm" align="center" mt={5}>
              登録はまだですか？{" "}
              <Anchor
                href="#"
                size="sm"
                onClick={(event) => event.preventDefault()}
              >
                アカウントを新規作成する
              </Anchor>
            </Text>
          </Container>
        </div>
      </div>
    </div>
  );
};
