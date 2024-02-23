import { Router } from "express";

const router = Router();

// Product routes

router.get("/product", (req, res) => {
  res.status(200);
  res.json({ message: "Hello from product!" });
});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.post("/product", () => {});
router.delete("/product/:id", () => {});

// Updates routes
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update", () => {});
router.delete("/update/:id", () => {});

// updates Assets routes

router.get("/updateassets", () => {});
router.get("/updateassets/:id", () => {});
router.put("/updateassets/:id", () => {});
router.post("/updateassets", () => {});
router.delete("/updateassets/:id", () => {});

export default router;
