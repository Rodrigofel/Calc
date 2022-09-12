export async function asyncOperation() {
  const response = await fetch(
    `https://lh4j4sdpmljdcrcr34gqc6ddni0qvugb.lambda-url.us-east-1.on.aws/?operation=div&a=30&b=40`
  );
  const json = await response.json();
  //console.log(json.result);
}
